import "./features.scss";
const Features = () => {
  return (
    <section className="features-section" id="about">
      <div className="container">
        <img src="kubik.svg" className="kubik" alt="Eror" />
        <div className="flex-class">
          <div className="features-texts">
            <h5>FEATURES</h5>
            <h1>Specify the time and day of private class</h1>
            <p>
              Due to the availability of our tutors in a vavariety of time slots
              that are totally tailored to each student’s specific pace, our
              scheduling system enables meticulous decision-making about time
              and student compatibility.{" "}
            </p>
            <img src="./book.svg" className="bookImg1" alt="Eror" />
          </div>
          <img src="./featureImg.svg" className="featureImg" alt="Eror" />
        </div>
        <img src="./book.svg" className="bookImg2" alt="Eror" />
      </div>
      <img src="ABC.svg" className="abc2" alt="Eror" />
    </section>
  );
};

export default Features;
