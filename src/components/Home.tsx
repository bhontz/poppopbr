import NominateForm from "../components/Nominate";
import DonateForm from "../components/Donate";
import UncontrolledExample from "../components/Carousel";
import OurNavBar from "../components/Navbar";

function Home() {
  return (
    <div className="container-xl my-5">
      <div className="row">
        <OurNavBar />
      </div>
      <div className="row">
        <div className="col">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          consequuntur porro ea in debitis similique nihil blanditiis culpa! Sit
          a sed voluptas veniam nam, eveniet officia delectus. Molestiae, velit
          sunt!
        </div>
        <div className="col">
          <UncontrolledExample />
        </div>
      </div>
      <div className="row">
        <DonateForm title="Donate" />
      </div>
      <div className="row">
        <NominateForm title="Nominate" />
      </div>
    </div>
  );
}

export default Home;
