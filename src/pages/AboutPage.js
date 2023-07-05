import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="text-6xl">
      <h1>This is the About Page</h1>
      <Link to="/" className="text-blue-500">
        Back
      </Link>
    </div>
  );
};

export default AboutPage;
