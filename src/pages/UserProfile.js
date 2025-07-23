// src/pages/UserProfile.js
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function UserProfile() {
  const { id } = useParams(); // Grabs the :id from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((r) => r.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Failed to fetch user:", err));
  }, [id]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}'s Profile</h1>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
        {/* Add more user details here */}
      </main>
    </>
  );
}

export default UserProfile;