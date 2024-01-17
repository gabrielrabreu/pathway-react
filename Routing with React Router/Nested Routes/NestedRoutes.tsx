import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Parent Component for Blog Page
function BlogPage() {
  return (
    <div>
      <h2>Blog Page</h2>
      <p>Welcome to our blog!</p>
      <ul>
        <li>
          <Link to="/blog/post/1">Post 1</Link>
        </li>
        <li>
          <Link to="/blog/post/2">Post 2</Link>
        </li>
      </ul>
      <Route path="/blog/post/:postId" component={BlogPost} />
    </div>
  );
}

// Child Component for Individual Blog Post
function BlogPost({ match }: { match: { params: { postId: string } } }) {
  const { postId } = match.params;

  return (
    <div>
      <h3>Blog Post #{postId}</h3>
      <p>This is the content of blog post #{postId}.</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div>
        <h1>Nested Routes Example</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={BlogPage} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

export default App;
