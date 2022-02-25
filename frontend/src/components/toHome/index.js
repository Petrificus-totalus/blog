import { withRouter } from "react-router-dom";

function ToHome(props) {
  return (
    <button
      onClick={() => {
        props.history.push("/");
      }}
    >
      home
    </button>
  );
}

export default withRouter(ToHome);
