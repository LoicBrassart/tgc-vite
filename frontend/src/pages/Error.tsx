import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h2>Hmm, this page seems to be missing... </h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
