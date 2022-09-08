export interface IFaqs {
  content: {
    faqHeading: string
    faqLeadtext: string
    faqs: IQandA[]
  }
}
export interface IFaq {
  faq: IQandA 
  onClick?: Function
}
interface IQandA {
  question: string
  answer: string
}