import { useState } from 'react';

const Faq = () => {
    const [visible, setVisible] = useState(null);

    const toggleVisibility = (index) => {
        setVisible(visible === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
            <button className='btn btn-outline rounded-2xl'>Faq</button>
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>
                <div className="mt-8 space-y-8 lg:mt-12">
                    {faqData.map((faq, index) => (
                        <div key={index} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <button
                                onClick={() => toggleVisibility(index)}
                                className="flex items-center justify-between w-full"
                            >
                                <h1 className="font-semibold text-gray-700 dark:text-white">{faq.question}</h1>
                                <span className={`rounded-full ${visible === index ? 'bg-gray-200 text-gray-400' : 'bg-blue-500 text-white'}`}>
                                    {visible === index ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            {visible === index && <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const faqData = [
    {
        question: "How can I schedule an appointment?",
        answer: `You can schedule an appointment by calling our office directly at (123) 456-7890, or you can use our online booking system available on our website. Simply click on the "Book Appointment" button, select your preferred date and time, and fill in your details.
`
    },
    {
        question: "Is my personal information secure on your website?",
        answer: "Yes, your personal information is secure on our website. We use advanced encryption technology to ensure that your data is protected. Our privacy policy outlines how we handle and safeguard your information"
    },
    {
        question: "What should I bring to my first appointment?",
        answer: "For your first appointment, please bring a valid photo ID, your insurance card, a list of any medications you are currently taking, and any relevant medical records or referral letters. This will help us provide the best possible care."
    },
    {
        question: "Do you accept walk-in patients?",
        answer: "Yes, we do accept walk-in patients. However, we recommend scheduling an appointment in advance to ensure that you can be seen at your preferred time. Walk-in patients will be seen on a first-come, first-served basis and may experience longer wait times."
    },
    {
        question: "What insurance plans do you accept?",
        answer: "We accept a wide range of insurance plans, including major providers such as Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact our office or check our website for a complete list of accepted insurance plans."
    }
];

export default Faq;
