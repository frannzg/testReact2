function UserCard({ name, age }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Edad: {age}</p>
    </div>
  );
}

export default UserCard;
