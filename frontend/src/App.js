// import logo from './logo.svg';
// import CourseReviewPage from "./pages/course-review";
// import SearchResultPage from "./pages/search-result";
// import IndexPage from "./pages/index";
// import UserAuthenticationPage from "./pages/user-authentication";

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="topics">Topics</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="topics/*" element={<Topics />} />
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="props-v-state">
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Routes> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Routes>
        <Route path=":id" element={<Topic />} />
        {/* <Route path="/" element={<h3>Please select a topic.</h3>} /> */}
      </Routes>
    </div>
  );
}

function Topic() {
  let { id } = useParams();
      console.log(id);
  return <h3>Requested topic ID: {id}</h3>;
}