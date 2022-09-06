import Image from '../images/values.jpg';
import SectionHead from './SectionHead';
import {SiBarclays} from 'react-icons/si';
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Values" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<SiBarclays/>} title="Values" className="tamim"></SectionHead>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque dolor cum esse expedita veritatis optio.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=>{
                            return(
                                <Card className="values__value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values;