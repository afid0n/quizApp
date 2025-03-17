import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../../Services/Context/AuthContext";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, isAdmin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdmin) return <Navigate to="/admin" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const isAuthenticated = login({ username, password });

    if (isAuthenticated) {
      navigate("/admin");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="border rounded flex flex-col justify-center items-center p-4 w-100 mx-auto my-40" >
        <h2 className="text-center text-3xl mb-6">Admin Login</h2>

        <div className="mb-4 flex flex-col w-full">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border p-1 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border  p-1 rounded" />
        </div>
        <button
          type="submit"
          className="bg-black w-full text-white mt-4 p-2 rounded"
        >
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
};

export default AdminLogin;
