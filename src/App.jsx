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

  <div className="mx-auto container overflow-hidden inter">
  <Nav></Nav>

<Hero></Hero>
<div className="mb-10 mt-8"><Graph></Graph></div>
<div className="mb-10 mt-8"><AboutUs></AboutUs></div>
<div className="mb-10 mt-8"><Services></Services></div>
<Testimonials></Testimonials>
<Faq></Faq>
<div className="mb-10 mt-8"><Appoinment></Appoinment></div>

  </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
