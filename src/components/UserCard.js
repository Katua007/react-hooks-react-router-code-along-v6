import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Link to={`/profile/${user.id}`}>View profile</Link>
    </div>
  );
}

export default UserCard;