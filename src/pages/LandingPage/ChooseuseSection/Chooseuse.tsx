import "./chooseuse.scss";
const Chooseuse = () => {
  return (
    <section className="chooseUs-section">
      <div className="container">
        <h2>Why Should You Choose Us?</h2>
        <div className="flex-class">
          <img src="./heroColor1.svg" alt="Eror" />
          <img src="./heroColor2.svg" alt="Eror" />
        </div>
        <div className="choose-cards grid-class">
          <div className="card">
            <h1>Relaxing And Learning</h1>
            <p className="p1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam nam ipsum error quasi nulla labore?
            </p>
            <img src="./chart1.svg" className="img1" alt="Eror" />
          </div>
          <div className="card">
            <h1>Certificate</h1>
            <p className="p2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam nam ipsum error quasi nulla labore?
            </p>
            <img src="./chart2.svg" className="img2" alt="Eror" />
          </div>
          <div className="card">
            <h1>Private Mentoring</h1>
            <p className="p3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam nam ipsum error quasi nulla labore?
            </p>
            <img src="./chart3.svg" className="img3" alt="Eror" />
          </div>
          <div className="card">
            <h1>Online Competitions</h1>
            <p className="p4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam nam ipsum error quasi nulla labore?
            </p>
            <img src="./chart4.svg" className="img4" alt="Eror" />
          </div>
        </div>
        <img src="./my.svg" className="my" alt="Eror" />
      </div>
    </section>
  );
};

export default Chooseuse;
