import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div>
      <h2>
        404 Page Not Found
      </h2>
      <p>Resource does not exist</p>
      <button onClick={() => history.push("/")}>Go Back to Home</button>
    </div>
  );
};

export default PageNotFound;
