import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer text-white py-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="footer__row flex flex-wrap justify-between">
          <div className="footer__col w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 text-gray-400">Menu</h4>
            <ul className="footer__nav space-y-2">
              <li><NavLink to="/about"><p className="hover:underline hover:text-green-200">About us</p></NavLink></li>
              <li><NavLink to="/investments"><p className="hover:underline hover:text-green-200">Investments</p></NavLink></li>
              <li><NavLink to="/faq"><p className="hover:underline hover:text-green-200">FAQ</p></NavLink></li>
              <li><NavLink to="/contact"><p className="hover:underline hover:text-green-200">Contacts</p></NavLink></li>
            </ul>
          </div>
          <div className="footer__col w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 text-gray-400">Actions</h4>
            <ul className="footer__nav space-y-2">
              <li><NavLink to="/register"><p className="text-gradient-strong hover:underline text-green-400 to-lime-300">Make a Deposit</p></NavLink></li>
              <li><NavLink to="/statistic"><p className="text-gradient-strong hover:underline  text-green-400 to-lime-300">Statistics</p></NavLink></li>
              <li><NavLink to="/login"><p className="text-gradient-strong hover:underline text-green-400 to-lime-300">Login</p></NavLink></li>
            </ul>
          </div>
          <div className="footer__col w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 text-gray-400">Email</h4>
            <ul className="footer__nav space-y-2">
              <li className='hover:text-green-200'>support@allcoinvest.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom mt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© Copyright, <span>2018</span> Allcoinvest All Rights Reserved</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><NavLink to="/terms"><p className="hover:underline">Privacy Policy</p></NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
