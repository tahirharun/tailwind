import Rejester from "./Rejester"
import DynamicStyledComponent from "./DynamicStyleComponents"
import ThemedComponent from "./ThemedComponets"
import UserForm from "./UserForm"
import { useState } from "react"
import ComponentA from "./ComponentA"
function App(){
  return(
    <>
    <ThemedComponent />
    <DynamicStyledComponent />
     <UserForm/>
     <Rejester />
     <ComponentA />
    </>
  )
  
// Dashboard Component
function Dashboard({ username, onLogout }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome, {username}</h1>
      <p className="mt-2 text-gray-600">You are now in the dashboard.</p>
      <button
        onClick={onLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

// Register Component (modified to send data back)
function RegisterForm({ onRegister }) {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() !== "") {
      onRegister(firstName); // send name back to App
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 max-w-sm mx-auto bg-gray-100 rounded-2xl shadow-lg"
    >
      <p className="text-orange-500 text-xl font-bold">Sign Up</p>

      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-sm text-gray-600">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-red-400 text-white px-3 py-2 rounded-lg focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Sign up
      </button>
    </form>
  );
}

// Main App
function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <Dashboard username={user} onLogout={handleLogout} />
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
    </>
  );
}
}
export default App