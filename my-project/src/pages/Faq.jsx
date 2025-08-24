import React from "react";

const faqs = [
  {
    question: "What can I expect in a therapy session?",
    answer:
      "In sessions, expect a supportive, non-judgmental space to explore your thoughts, feelings, and experiences. Your therapist listens, guides, and equips you with coping tools for positive change.",
  },
  {
    question: "Do you offer online therapy sessions?",
    answer:
      "Yes, we offer secure and private online therapy sessions to ensure accessibility and flexibility.",
  },
  {
    question: "What is the difference between therapy and counselling?",
    answer:
      "While both aim to improve mental well-being, therapy often explores deeper psychological issues, whereas counselling may focus on present problems and support.",
  },
  {
    question: "How is my confidentiality maintained during therapy sessions?",
    answer:
      "We strictly follow confidentiality protocols. Your data and discussions remain private unless legally required otherwise.",
  },
  {
    question: "How can I schedule a therapy appointment?",
    answer:
      'You can schedule your appointment through our "Book A Session" button on the website or contact us directly for assistance.',
  },
];

const FaqSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center">
          Frequently Asked Questions
        </h2>
        <div className="bg-white rounded-md shadow border">
          {faqs.map((item, index) => (
            <details key={index} className="group p-5 border-b last:border-b-0">
              <summary className="cursor-pointer font-semibold text-gray-700 transition-colors group-open:text-green-500">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
