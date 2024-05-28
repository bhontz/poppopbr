import { ReactNode } from "react";
import { Container, Button, Form } from "react-bootstrap";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

interface Props {
  title: string;
  children: ReactNode;
}

function DonateForm({ title, children }: Props) {
  const client = generateClient<Schema>();

  const submitDonateForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    console.log(payload);
    console.log(payload.donatefullname);
    console.log(payload.donateaddress);

    await client.models.Donate.create({
      donatefullname: payload.donatefullname as string,
      donateaddress: payload.donateaddress as string,
    });

    isDone: false;
  };

  return (
    <Container className="donateblock p-3">
      <h3>{title}</h3>
      {children}
      <Form onSubmit={submitDonateForm}>
        <Form.Group className="mb-3" controlId="DontateFormFullName">
          <Form.Label className="form-label">Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="donatefullname"
            placeholder="Enter your Name here"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="DontateFormAddress">
          <Form.Label className="form-label">Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="donateaddress"
            placeholder="Enter your Address here"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Donate
        </Button>
      </Form>
    </Container>
  );
}

export default DonateForm;
