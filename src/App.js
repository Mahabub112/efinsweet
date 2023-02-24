import Banner from "./component/banner/Banner";
import Blog from "./component/blog/Blog";
import Client from "./component/client/Client";
import Footer from "./component/footer/Footer";
import Frequently from "./component/frequently/Frequently";
import Froms from "./component/froms/Froms";
import LetTalks from "./component/lettalks/LetTalks";
import Navbar from "./component/navbar/Navbar";
import Service from "./component/service/Service";
import Work from "./component/work/Work";
import ProjectReview from "./component/your_project/ProjectReview";
import "./style.css"


function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Work/>
      <ProjectReview/>
      <Service/>
      <Client/>
      <Frequently/>
      <Froms/>
      <Blog/>
      <LetTalks/>
      <Footer/>

    </>
  );
}

export default App;
