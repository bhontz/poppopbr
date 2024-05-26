import { NavLink } from "react-router-dom";

function About() {
  const name = "Brad";
  let message;

  if (name) {
    message = <h1>Hey {name} this will be the ABOUT page</h1>;
  } else {
    message = <h1>This will be the ABOUT page!</h1>;
  }

  return (
    <div className="container-xl my-5">
      {message}
      <NavLink to="/">Return</NavLink>
    </div>
  );
}

export default About;
