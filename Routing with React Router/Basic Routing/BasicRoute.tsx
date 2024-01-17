import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Define components for Home and About pages
const Home: React.FC = () => <h2>Home</h2>;
const About: React.FC = () => <h2>About</h2>;

const BasicRoute: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Create navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes for Home and About */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default BasicRoute;
