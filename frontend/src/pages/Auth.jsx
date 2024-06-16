import { useContext, useState } from "react";
import { Label, TextInput, Select, Button, Checkbox } from "flowbite-react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    district: "",
    languages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLanguagesChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, languages: [...prevData.languages, value] };
      } else {
        return {
          ...prevData,
          languages: prevData.languages.filter((lang) => lang !== value),
        };
      }
    });
  };

  const { setUserId } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to the backend
    console.log(formData);

    axios.post("http://localhost:3000/api/users", formData).then((res) => {
      console.log(res.data);
      setUserId(res.data.id);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded-lg shadow-md"
    >
      <div className="mb-4">
        <Label htmlFor="name" value="Name" />
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required={true}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" value="Email" />
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required={true}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="password" value="Password" />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required={true}
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="role" value="Role" />
        <Select
          id="role"
          name="role"
          required={true}
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
          <option value="admin">Admin</option>
        </Select>
      </div>
      <div className="mb-4">
        <Label htmlFor="district" value="District" />
        <TextInput
          id="district"
          name="district"
          type="text"
          placeholder="Enter your district"
          required={true}
          value={formData.district}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Label value="Languages" />
        <div className="flex flex-wrap gap-2">
          {["English", "Spanish", "French", "German", "Chinese"].map((lang) => (
            <div key={lang} className="flex items-center">
              <Checkbox
                id={`language-${lang}`}
                name="languages"
                value={lang}
                onChange={handleLanguagesChange}
              />
              <Label
                htmlFor={`language-${lang}`}
                value={lang}
                className="ml-2"
              />
            </div>
          ))}
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
