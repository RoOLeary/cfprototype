import { IFaq } from '../../interfaces/IFaq'

const FaqItem = ({ faq, onClick }: IFaq): JSX.Element => {
    return(
        <li className="b-faq__listItem">
            <div className="b-faq__question js-faqQuestion" onClick={(e) => onClick(e)}>{faq['question']}</div>
            <div className="b-faq__answer">
                <div className="b-faq__answerInner c-formatted js-faqAnswerInner" dangerouslySetInnerHTML={{ __html: faq['answer'] }} />
            </div>
        </li>
    )

};


export default FaqItem; 