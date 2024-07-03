import AboutUs from "./AboutUs/AboutUs";
import Appoinment from "./Appoinment/Appoinment";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Graph from "./Graph/Graph";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";






function App() {


  return (
    <div className=" ">
    {/* navbar */}

  <div className="mx-auto container overflow-hidden">
  <Nav></Nav>

<Hero></Hero>
<Graph></Graph>
<AboutUs></AboutUs>
<Services></Services>
<Testimonials></Testimonials>
<Faq></Faq>
<Appoinment></Appoinment>

  </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
