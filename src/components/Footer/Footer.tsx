import "./footer.scss";
const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="grid-class">
          <div className="grid grid1">
            <ul>
              <h1>Zeemlin</h1>
              <li>+1 (7635) 547-12-97</li>
              <li>zeemlin@lift.tghdhy</li>
            </ul>
          </div>
          <h1>Zeemlin</h1>
          <div className="grid grid2">
            <ul>
              <h1>Resours</h1>
              <li>
                <a href="#">Video lessons</a>
              </li>
              <li>
                <a href="#">Journal</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Homework</a>
              </li>
              <li>
                <a href="#">Quiz</a>
              </li>
              <li>
                <a href="#">Grade</a>
              </li>
              <li>
                <a href="#">Statistics</a>
              </li>
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">Certificate</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom flex-class">
          <h5>© 2024 • All Rights Reserved</h5>
          <div className="bottom-right flex-class">
            {/* <img src="./socialMedia.svg" alt="Eror" /> */}
            <select>
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="Eng">Eng</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
