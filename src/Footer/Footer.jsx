import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#020043] text-[#FFFFF5] p-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <img src="./logo light.png" className="h-12 mb-4 mx-auto md:mx-0" alt="Flowbite Logo" />
                </div>
                <div className="text-center md:text-left">
                    <p className="font-medium">123 Main Street Anytown, USA</p>
                    <p className="font-medium">Postal Code: 12345</p>
                    <p className="mt-2">Support: <a href="mailto:support@oyolloo.com" className="underline">support@oyolloo.com</a></p>
                    <p>(Available : 10:00am to 07:00pm)</p>
                </div>
                <div className="text-center md:text-left">
                    <h6 className="font-semibold mb-2">Quick Links</h6>
                    <ul>
                        <li><a className="link link-hover font-light" href="#">Home</a></li>
                        <li><a className="link link-hover font-light" href="#">About Us</a></li>
                        <li><a className="link link-hover font-light" href="#">Success Page</a></li>
                        <li><a className="link link-hover font-light" href="#">Terms And Conditions</a></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h6 className="font-semibold mb-2">Services</h6>
                    <ul>
                        <li><a className="link link-hover font-light" href="#">Services</a></li>
                        <li><a className="link link-hover font-light" href="#">Scheduling</a></li>
                        <li><a className="link link-hover font-light" href="#">Contact Us</a></li>
                        <li><a className="link link-hover font-light" href="#">Patient Portal</a></li>
                    </ul>
                </div>
                <div className="text-center md:text-left">
                    <h6 className="font-semibold mb-2">Follow Us</h6>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400"><FaFacebook size={26} /></a>
                        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram size={26} /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400"><FaLinkedin size={26} /></a>
                        <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-400"><FaYoutube size={26} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Doplus. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
