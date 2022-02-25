import { useNavigate } from "react-router-dom";

export default function ToHome() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      home
    </button>
  );
}
