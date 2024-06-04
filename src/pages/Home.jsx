import "./Home.css";
import Frame from "../assets/img/Frame.png"

const Home = () => {
  return (
    <>
      <div className="header__div">
        <div className="single__div">
          <h1>
            Award-winning custom <br />
            designs and digital <br />
            branding solutions
          </h1>
          <p>
            With over 10 years in the industry, we are experienced in <br />
            creating fully responsive websites, app design, and engaging <br />
            brand experiences. Find out more about our services.
          </p>
          <button>LEARN MORE</button>
        </div>
        <img
          className="phone__frame frame"
          src={Frame}
          alt="Frame"
        />
      </div>
    </>
  );
};

export default Home;
