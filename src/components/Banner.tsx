import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { ReactNode } from "react";

interface Props {
  imgsrc: string;
  title: string;
  children: ReactNode;
}

function Banner({ imgsrc, title, children }: Props) {
  return (
    <Container fluid>
      <CardGroup className="m-3 d-block">
        <Card className="m-3 bg-light text-black">
          <Row>
            <Col>
              <Card.Img width="50" src={imgsrc} alt="card graphic" />
            </Col>
            <Col className="align-content-center">
              <Card.Title>
                <h1>{title}</h1>
              </Card.Title>
            </Col>
          </Row>
          <Row>
            <Card.Text className="m-2 text-black">{children}</Card.Text>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default Banner;
