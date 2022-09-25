import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import {trainers} from '../../data';
import Trainer from '../../components/Trainer';
import './Trainers.css'
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Trainers = () => {
  return (
    <>
    <Header title='Our Trainers' image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Possimus, ex totam. Deserunt aspernatur delectus modi! 
       Praesentium dolorem eaque illum. Omnis!
    </Header>
    <section className="trainers">
      <div className="container trainers_container">
        {
          trainers.map(({id,image,name,job,socials})=>{
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon:<AiFillInstagram/>,link:socials[0]},
                {icon:<AiFillTwitterSquare/>,link:socials[1]},
                {icon:<AiFillFacebook/>,link:socials[2]},
                {icon:<AiFillLinkedin/>,link:socials[3]},
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers