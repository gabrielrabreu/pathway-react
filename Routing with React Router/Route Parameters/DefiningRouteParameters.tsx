import React from "react";
import { Link } from "react-router-dom";

const DefiningRouteParameters: React.FC = () => {
  return (
    <div>
      <h2>Defining Route Parameters</h2>
      <p>
        You can define route parameters by specifying a route pattern with a
        placeholder segment.
      </p>
      <p>
        For example, the following route pattern defines a parameter named "id"
        in the URL: <code>/user/:id</code>
      </p>
      <p>
        You can then access this parameter using the <code>useParams</code> hook
        from React Router.
      </p>
      <p>
        <Link to="/user/123">Go to User 123</Link>
      </p>
    </div>
  );
};

export default DefiningRouteParameters;
