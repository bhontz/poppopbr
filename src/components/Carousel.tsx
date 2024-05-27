import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function ImageCarousel() {
  return (
    <Carousel interval={null} slide={false}>
      <Carousel.Item>
        <Image
          src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263739/avatar_2_2.png"
          width="300"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263739/avatar_2_3.png"
          width="300"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://res.cloudinary.com/dpeqsj31d/image/upload/v1707263739/avatar_2_4.png"
          width="300"
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
