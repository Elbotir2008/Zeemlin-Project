import "./process.scss";
const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="line"></div>
        <div className="flex-class">
          <img src="./my.svg" className="img1" alt="Eror" />
          <img src="./heroPerson3.svg" className="img2" alt="Eror" />
          <div className="process-text">
            <h1>
              Benefity of Evalution Process{" "}
              <img src="./Books.svg" className="img4" alt="Eror" />
            </h1>
            <p>
              The evaluation process in the Zeemlin Project offers several
              benefits for both teachers and students. It provides teachers with
              valuable insights into individual student performance, allowing
              them to tailor their teaching strategies accordingly. For
              students, it offers a clear understanding of their strengths and
              areas for improvement, enabling them to focus on specific topics
              and enhance their learning outcomes.
              {/* <img src="kubik.svg" className="img3" alt="Eror" /> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
