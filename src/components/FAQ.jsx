import { useState } from 'react';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {AiOutlineMinusSquare} from 'react-icons/ai';


const FAQ = ({question,answer}) => {
  
  const[isAnswerShowing,setIsAnswerShowing]=useState(false);

  return (
    <article className="faq" onClick={()=> setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {isAnswerShowing ? <AiOutlineMinusSquare/>:<AiOutlinePlusSquare/>}
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
        
    </article>
  )
}

export default FAQ