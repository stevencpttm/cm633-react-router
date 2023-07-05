import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-6xl">
      <h1>This is the Homepage</h1>
      <Link to="/about" className="text-blue-500">
        About
      </Link>
    </div>
  );
};

export default HomePage;
