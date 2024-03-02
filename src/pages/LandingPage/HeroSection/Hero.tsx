import "./hero.scss";
const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="line"></div>
        <div className="flex-class">
          <h1>
            Today is reader
            <br />
            Tomorrow is <span>LEADER</span>
          </h1>
          <img src="./pencil.svg" alt="Eror" />
        </div>
        <p>
          Empower your future learn anywhere, build everywhere for a bright
          career
        </p>
        <button>Learn More</button>
        <div className="hero-images">
          <div className="hero-colorImgs flex-class">
            <img src="./heroColor1.svg" alt="Eror" />
            <img src="./heroColor2.svg" alt="Eror" />
          </div>
          <div className="hero-personImgs grid-class">
            <img src="./heroPerson1.svg" alt="Eror" />
            <img src="./heroPerson2.svg" alt="Eror" />
            <img src="./heroPerson3.svg" alt="Eror" />
          </div>
          <img src="ABC.svg" className="abc" alt="Eror" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
