import { Link } from "react-router-dom";
// import logo from "../../assets/logo 2.svg";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WaveBottom } from '../Waves';
import '../Waves/Waves.css'
import './Footer.css'

export const Footer = () => {

  const numberP = import.meta.env.PHONE;

  return (

    <nav className="footer__container">
      <div className='footer__content'>
        <img
          className="footer__img"
          src="https://res.cloudinary.com/ferjen/image/upload/v1685880684/portfolio/logo/fj-logo_transparent_24x24_gme1mm.svg"
          alt="FJ logo"
        />

        <div className="link__container">
          <Link
            className="footer__link"
            to="https://www.linkedin.com/in/ferjen/"
            target="_blank"
          >
            <FaLinkedinIn />

          </Link>

          <Link
            className="footer__link"
            to="https://github.com/ferjencoder"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className="footer__link"
            to={`https://api.whatsapp.com/send?phone=${numberP}`}
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </nav>
  );
};
