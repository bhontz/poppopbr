import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CloseButton from "react-bootstrap/CloseButton";

function Contacts() {
  const name = "Brad";
  const navigate = useNavigate();
  let message;

  function handleClick() {
    navigate("/");
  }

  if (name) {
    message = <h1>Hey {name} this will be the CONTACTS page</h1>;
  } else {
    message = <h1>This will be the CONTACTS page!</h1>;
  }

  return (
    <Container>
      <CloseButton onClick={handleClick} />
      {message}
    </Container>
  );
}

export default Contacts;
