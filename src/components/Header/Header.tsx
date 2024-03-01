import { useState } from "react";
import "./header.scss";
const Header = () => {
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);
  const [changeColor3, setChangeColor3] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuFunc = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <h1
            onClick={() => {
              location.reload();
            }}
          >
            Zeemlin
          </h1>
          <img
            src="./sidebar.svg"
            onClick={openMenuFunc}
            className="menuBtn"
            alt="Eror"
          />
          <ul className={openMenu ? "openMenu" : "flex-class"}>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setChangeColor1(true);
                  setChangeColor2(false);
                  setChangeColor3(false);
                }}
                style={
                  changeColor1
                    ? { color: "#238A12", textDecoration: "underline" }
                    : {}
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setChangeColor1(false);
                  setChangeColor2(true);
                  setChangeColor3(false);
                }}
                style={
                  changeColor2
                    ? { color: "#238A12", textDecoration: "underline" }
                    : {}
                }
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setChangeColor1(false);
                  setChangeColor2(false);
                  setChangeColor3(true);
                }}
                style={
                  changeColor3
                    ? { color: "#238A12", textDecoration: "underline" }
                    : {}
                }
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="btns flex-class">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
