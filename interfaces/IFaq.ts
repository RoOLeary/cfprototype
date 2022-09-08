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

export interface IQandA {
  question: string
  answer: string
}