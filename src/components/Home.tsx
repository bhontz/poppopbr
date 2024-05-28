import { Container, Row, Col } from "react-bootstrap";
import NominateForm from "../components/Nominate";
import DonateForm from "../components/Donate";
import ImageCarousel from "../components/Carousel";
import OurNavBar from "../components/Navbar";
import Banner from "../components/Banner";
import mission_graphic from "../assets/mission_graphic.png";
import vision_graphic from "../assets/vision_graphic.png";

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
        <Col>
          <Banner title="Mission Statement" imgsrc={mission_graphic}>
            <p>
              consequuntur porro ea in debitis similique nihil blanditiis culpa!
              Sit a sed voluptas veniam nam, eveniet officia delectus.
              Molestiae, velit sunt!
            </p>
          </Banner>
        </Col>
        <Col>
          <Banner title="Vision" imgsrc={vision_graphic}>
            <p>
              consequuntur porro ea in debitis similique nihil blanditiis culpa!
              Sit a sed voluptas veniam nam, eveniet officia delectus.
              Molestiae, velit sunt!
            </p>
          </Banner>
        </Col>
      </Row>
      <Row>
        <DonateForm title="Donating a Bicycle">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            consequuntur porro ea in debitis similique nihil blanditiis culpa!
            Sit a sed voluptas veniam nam, eveniet officia delectus. Molestiae,
            velit sunt!
          </p>
        </DonateForm>
      </Row>
      <Row>
        <NominateForm title="Nominating a Family">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            consequuntur porro ea in debitis similique nihil blanditiis culpa!
            Sit a sed voluptas veniam nam, eveniet officia delectus. Molestiae,
            velit sunt!
          </p>
        </NominateForm>
      </Row>
    </Container>
  );
}

export default Home;
