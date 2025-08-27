import React, { useState } from "react";

function BookList() {
  const [books] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, title: "Deep Work", author: "Cal Newport" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookId: "",
  });

  const [students, setStudents] = useState([]); // list of admitted students

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const chosenBook = books.find((b) => b.id === parseInt(formData.bookId));
    setStudents([...students, { ...formData, book: chosenBook }]); // add new student
    setFormData({ name: "", email: "", bookId: "" }); // reset form
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Admission Portal</h1>

      {/* Book List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Available Books</h2>
        <ul className="space-y-3">
          {books.map((book) => (
            <li
              key={book.id}
              className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
            >
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Signup Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Admission Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />

          {/* Instead of courses, choose from the book list */}
          <select
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">-- Select a Book --</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title} (by {book.author})
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Admission
          </button>
        </form>
      </div>

      {/* Registered Students */}
      {students.length > 0 && (
        <div className="bg-gray-50 shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Registered Students</h2>
          <ul className="space-y-2">
            {students.map((student, index) => (
              <li
                key={index}
                className="p-3 bg-green-100 rounded-lg shadow-sm"
              >
                <p>
                  <span className="font-semibold">{student.name}</span> chose{" "}
                  <span className="italic">{student.book?.title}</span>
                </p>
                <p className="text-sm text-gray-600">{student.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookList;
