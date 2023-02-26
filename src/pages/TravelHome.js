import { useNavigate } from "react-router-dom";

function TravelHome() {
  const navigate = useNavigate();
  return (
    <>
      <div>This is the home page.</div>
      <button onClick={() => navigate("/new-trip")}>Create trip</button>
    </>
  );
}

export default TravelHome;
