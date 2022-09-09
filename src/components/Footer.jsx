import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem quis a reprehenderit consequatur rerum ad enim ducimus voluptate accusamus?
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/tamim-gamal-94ab76110/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin/></a>
                    <a href="https://www.facebook.com/tash.gaaba/" target="_blank" rel="noreferrer noopener"><FaFacebookSquare/></a>
                    <a href="https://www.instagram.com/tashgaaba/?hl=en" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                    <a href="https://github.com/Tashegypt6" target="_blank" rel="noreferrer noopener"><AiFillGithub/></a>
                </div>
            </article>
            <article className="footer__links">
                <h4>PermaLinks</h4>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article className="footer__links">
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article className="footer__links">
                <h4>In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>All Rights Reserved&copy;Tamim&trade;2022</small>
        </div>
    </footer>
  )
}

export default Footer