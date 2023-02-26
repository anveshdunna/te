import { useNavigate } from "react-router-dom";

function NewTrip() {
  const navigate = useNavigate();
  return (
    <div>
      <div>This is the Create CreateTrip page.</div>
      <button onClick={() => navigate("/results")}>Select options</button>
    </div>
  );
}

export default NewTrip;
