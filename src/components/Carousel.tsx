import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel interval={null} slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-60"
          src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263739/avatar_2_2.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60"
          src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263739/avatar_2_3.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-60"
          src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263739/avatar_2_4.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
