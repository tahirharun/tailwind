
function Register() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-sm mx-auto bg-gray-100 rounded-2xl shadow-lg">
      <p className="text-orange-500 text-xl font-bold">Sign Up</p>

      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-sm text-gray-600">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          className="bg-red-400 text-white px-3 py-2 rounded-lg focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-sm text-gray-600">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter Last Name"
          className="bg-green-700 text-white px-3 py-2 rounded-lg focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phoneNumber" className="text-sm text-gray-600">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          placeholder="Enter your phone number"
          className="bg-orange-500 text-white px-3 py-2 rounded-lg focus:outline-none"
        />
      </div>

      <button className="mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
        Sing up
      </button>
    </div>
  );
}

export default Register;