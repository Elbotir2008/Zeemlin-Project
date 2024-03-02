import "./topic.scss";
const Topic = () => {
  return (
    <section className="topic-section">
      <div className="container">
        <div className="flex-class">
          <div className="topic-texts">
            <img src="./ABC.svg" className="abc img1" alt="Eror" />
            <h1>Evaluation Based on Topic</h1>
            <p>
              In the Zeemlin Project, teachers evaluate students based on the
              specific topic they are studying. This allows for targeted
              assessment of their understanding and progress in that particular
              subject area.{" "}
            </p>
            <img src="./my.svg" className="my1 img2" alt="Eror" />
            <img src="./my2.svg" className="my2 img3" alt="Eror" />
          </div>
          <img src="./topicImg.svg" className="topic" alt="Eror" />
        </div>
      </div>
    </section>
  );
};

export default Topic;
