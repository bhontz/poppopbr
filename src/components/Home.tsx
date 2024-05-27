import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NominateForm from "../components/Nominate";
import DonateForm from "../components/Donate";
import ImageCarousel from "../components/Carousel";
import OurNavBar from "../components/Navbar";

function Home() {
  return (
    <Container fluid="xl">
      <Row>
        <OurNavBar />
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            consequuntur porro ea in debitis similique nihil blanditiis culpa!
            Sit a sed voluptas veniam nam, eveniet officia delectus. Molestiae,
            velit sunt!
          </p>
        </Col>
        <Col>
          <ImageCarousel />
        </Col>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          consequuntur porro ea in debitis similique nihil blanditiis culpa! Sit
          a sed voluptas veniam nam, eveniet officia delectus. Molestiae, velit
          sunt!
        </p>
      </Row>
      <Row>
        <DonateForm title="Donate"></DonateForm>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          consequuntur porro ea in debitis similique nihil blanditiis culpa! Sit
          a sed voluptas veniam nam, eveniet officia delectus. Molestiae, velit
          sunt!
        </p>
      </Row>
      <Row>
        <NominateForm title="Nomitate"></NominateForm>
      </Row>
    </Container>
  );
}

export default Home;
