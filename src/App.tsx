// import { Route, Router, Routes } from "react-router";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={ */}
      <LandingPage />
      {/* } /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
