import {AiOutlinePlusSquare} from 'react-icons/ai';
import {AiOutlineMinusSquare} from 'react-icons/ai';

const FAQ = ({question,answer}) => {
  return (
    <article className="faq">
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                <AiOutlinePlusSquare/>
            </button>
        </div>
        <p>
            {answer}
        </p>
    </article>
  )
}

export default FAQ