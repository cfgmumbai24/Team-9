

import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import joblib
import sklearn

# Function to load data from CSV
@st.cache_data
def load_data(csv_file):
    return pd.read_csv(csv_file)

@st.cache_resource
def load_model(pkl_file):
    return joblib.load(pkl_file)

# Load data
data = load_data('student_data.csv')  # Replace with your actual CSV file path

# Load model pipeline
model_pipeline = load_model('student_success_rate.pkl')

# Sidebar for student selection
st.sidebar.title('Select Student')
student_ids = data['Student_ID'].unique()
selected_student = st.sidebar.selectbox('Student_ID', student_ids)

# Filter data for selected student
student_data = data[data['Student_ID'] == selected_student].iloc[0]

# Main dashboard
st.title(f'Student Dashboard: {selected_student}')

# Attendance Score
st.subheader('Attendance Score')
attendance = student_data['Attendance']
fig_attendance = px.pie(values=[attendance, 100-attendance], names=['Attendance', 'Missing'], hole=0.7, title='Attendance')
st.plotly_chart(fig_attendance)

# Test Marks
st.subheader('Test Marks')
test_columns = ['test1', 'test2', 'test3', 'test4', 'test5']
test_scores = student_data[test_columns]
fig_test_scores = px.bar(x=test_columns, y=test_scores, labels={'x':'Tests', 'y':'Scores'}, title='Test Scores')
st.plotly_chart(fig_test_scores)

# Trend of Test Scores
st.subheader('Trend of Test Scores')
fig_test_trend = px.line(x=test_columns, y=test_scores, labels={'x':'Tests', 'y':'Scores'}, title='Test Score Trend')
st.plotly_chart(fig_test_trend)

# Number of Calls with Mentor
st.subheader('Number of Calls with Mentor')
calls_with_mentor = student_data['number_of_calls_with_mentor']
fig_calls = px.bar(x=['Calls'], y=[calls_with_mentor], labels={'x':'', 'y':'Number of Calls'}, title='Calls with Mentor')
fig_calls.update_traces(texttemplate='%{y}', textposition='inside', insidetextanchor='middle')
st.plotly_chart(fig_calls)

# Number of Colleges Applied To
st.subheader('Number of Colleges Applied To')
colleges_applied = student_data['number_of_colleges_applied']
fig_colleges = px.bar(x=['Colleges Applied'], y=[colleges_applied], labels={'x':'', 'y':'Number of Colleges'}, title='Colleges Applied To')
fig_colleges.update_traces(texttemplate='%{y}', textposition='inside', insidetextanchor='middle')
st.plotly_chart(fig_colleges)

# Admission Stage
st.subheader('Admission Stage')
admission_stage = student_data['admission_stage']
fig_stage = px.funnel(
    pd.DataFrame({
        'stage': ['Looking for Opportunities', 'Applied', 'Offer Received'],
        'count': [1 if admission_stage == 'Looking for Opportunities' else 0, 1 if admission_stage == 'Applied' else 0, 1 if admission_stage == 'Offer Received' else 0]
    }),
    x='count', y='stage', title='Admission Stage'
)
st.plotly_chart(fig_stage)


# Insights gained
st.header('Insights Gained')

# Prepare data for prediction
avg_test_score = test_scores.mean()
input_features = pd.DataFrame({
    'Attendance': [attendance],
    'Average_Test_Score': [avg_test_score],
    'Mentor_Calls': [calls_with_mentor]
   # 'number_of_colleges_applied': [colleges_applied]
})

# Predict Student Success Rate
st.subheader('Student Success Rate')
success_rate = model_pipeline.predict(input_features)[0]
st.metric(label="", value=f"{success_rate:.2f}%")


# Load model pipeline
model_pipeline_2 = load_model('student_dropout_rate.pkl')

# Predict Student Dropout Risk
input_features = pd.DataFrame({
    'Attendance': [attendance],
    'Marks': [avg_test_score],
    'Mentor_Calls': [calls_with_mentor],
    'University_Applications': [colleges_applied]
})
st.subheader('\nStudent Dropout Risk')
dropout_risk = model_pipeline_2.predict(input_features)[0]
st.metric(label="", value=f"{dropout_risk*100:.2f}%")
