import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#f1356d", marginBottom: "25px" }}>
        404 Page Not Found
      </h2>
      <p style={{ marginBottom: "20px" }}>Resource does not exist</p>
      <button
        style={{
          background: "#f1356d",
          color: "#fff",
          border: "0",
          padding: "8px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => history.push("/")}
      >
        Go Back to Home Page
      </button>
    </div>
  );
};

export default PageNotFound;
