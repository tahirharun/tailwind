import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "grade a",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div className="p-4">
      <p className="text-orange-500 text-xl mb-2">User Form</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-gray-100 p-4 rounded-2xl shadow-md max-w-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Please enter your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-red-600 text-white p-2 rounded"
        />

        <input
          type="number"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-green-600 text-white p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Please enter your Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-blue-600 text-white p-2 rounded"
        />

        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className="p-2 rounded"
        >
          <option value="grade a">A</option>
          <option value="grade b">B</option>
          <option value="grade c">C</option>
          <option value="grade d">D</option>
        </select>

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg mb-2">Submitted Data:</h2>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Phone:</strong> {submitted.phone}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Grade:</strong> {submitted.grade.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;