import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import {AiTwotoneMail} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsMessenger} from 'react-icons/bs';
import './Contact.css'




const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque aspernatur possimus alias suscipit veritatis vitae non exercitationem, maxime repellendus.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:tashegypt6@yahoo.com" target='_blank' rel='noreferrer noopener'><AiTwotoneMail/></a>
            <a href="mailto:tashegypt22@gmail.com" target='_blank' rel='noreferrer noopener'><SiGmail/></a>
            <a href="https://m.me/tash.gaaba" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+201119933019" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact