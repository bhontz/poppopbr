import { ReactNode } from "react";
import { Container, Button, Form } from "react-bootstrap";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

interface Props {
  title: string;
  children: ReactNode;
}

function NominateForm({ title, children }: Props) {
  const client = generateClient<Schema>();

  const submitNominateForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload);
    console.log(payload.nominatefullname);
    console.log(payload.nominateaddress);

    await client.models.Nominate.create({
      nominatefullname: payload.nominatefullname as string,
      nominateaddress: payload.nominateaddress as string,
    });

    isDone: false;
  };

  return (
    <Container className="nominateblock p-3">
      <h3>{title}</h3>
      {children}
      <Form onSubmit={submitNominateForm}>
        <Form.Group className="mb-3" controlId="NominateFormFullName">
          <Form.Label className="form-label">Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="nominatefullname"
            placeholder="Enter your Name here"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="NominateFormAddress">
          <Form.Label className="form-label">Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="nominateaddress"
            placeholder="Enter your Address here"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Nominate
        </Button>
      </Form>
    </Container>
  );
}

export default NominateForm;
