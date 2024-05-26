import { NavLink } from "react-router-dom";

function Contacts() {
  const name = "Brad";
  let message;

  if (name) {
    message = <h1>Hey {name} this will be the CONTACTS page</h1>;
  } else {
    message = <h1>This will be the CONTACTS page!</h1>;
  }

  return (
    <div className="container-xl my-5">
      {message}
      <NavLink to="/">Return</NavLink>
    </div>
  );
}

export default Contacts;
