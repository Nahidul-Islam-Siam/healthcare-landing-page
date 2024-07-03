import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="">
           <footer className="footer bg-[#020043] text-[#FFFFF5] p-16">
<nav>
<aside>
  <img src="./logo light.png" className="h-8" alt="Flowbite Logo" />
    <p>
    123 Main Street Anytown, USA <br />
    Postal Code: 12345</p>
     <p> Support: support@oyolloo.com <br />
(Available : 10:00am to 07:00pm)</p>
    
  </aside>
</nav>
  <nav>
   
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Success Page</a>
    <a className="link link-hover">Terms And Condition</a>
  </nav>
  <nav>
    
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Patient Portal</a>
  </nav>
  <nav>
    <h6 className="footer-title">Follow Us</h6>
    <div className="grid grid-flow-col gap-4">
      <FaFacebook size={26}/>
      <FaInstagram size={26}/>
      <FaLinkedin size={26}/>
      <FaYoutube size={26}/>
      
    </div>
    <br />
    <a className="link link-hover">Patient Portal</a>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;