import React from 'react';
import FAQCard from '../ui/FAQCard';

function FAQ() {
    const faqs1 = [
        {
          question: "Is there a fee to partner with BiteBlitz?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
          question: "How do I become a biteblitz partner?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
            question: "How does the platform help me manage my orders?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
          },
          {
            question: "What are the costs involved in Partnering with BiteBlitz?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
          },
          {
            question: "How does BiteBlitz handle delivery?",
            answer:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
          },
      ];

      const faqs2 = [
        {
        question: "How do I receive Payments?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "What kind of support does BiteBlitz offer?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "Can I offer both virtual and in-person consultations?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "How does BiteBlitz help promote my services?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
        {
        question: "What happens if a client is not satisfied with their order?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus magnam sapiente illo inventore voluptate itaque non recusandae aliquam error!",
        },
      ]
  return (
    <div className='flex flex-col justify-center items-center py-6 px-24 mb-12'>
        <h1 className='text-3xl text-[#FF6443] font-roboto-serif font-medium text-center py-12'>Partners Support <br /> and FAQs</h1>
        <div className='flex gap-12'>
            <div className='flex max-w-[50%] flex-col gap-4'>
                {faqs1.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className='flex max-w-[50%] flex-col gap-4'>
                {faqs2.map((faq, index) => (
                    <FAQCard key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default FAQ