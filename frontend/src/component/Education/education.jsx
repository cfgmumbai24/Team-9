import "./eduction.css";

const Education = () => {
  return (
    <div className="form-container">
      <h2>Education Details Form</h2>
      <form onSubmit={() => {}}>
        <label htmlFor="x-school">X School:</label>
        <input type="text" id="x-school" name="x-school" required />

        <label htmlFor="x-percentage">X Percentage:</label>
        <input
          type="number"
          step="0.01"
          id="x-percentage"
          name="x-percentage"
          required
        />

        <label htmlFor="xii-school">XII School:</label>
        <input type="text" id="xii-school" name="xii-school" required />

        <label htmlFor="xii-percentage">XII Percentage:</label>
        <input
          type="number"
          step="0.01"
          id="xii-percentage"
          name="xii-percentage"
          required
        />

        <label htmlFor="xii-stream">XII Stream:</label>
        <select id="xii-stream" name="xii-stream" required>
          <option value="pcmb">PCMB</option>
          <option value="pcm">PCM</option>
          <option value="commerce-with-maths">Commerce with Maths</option>
          <option value="commerce-without-maths">Commerce without Maths</option>
          <option value="humanities">Humanities</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Education;
