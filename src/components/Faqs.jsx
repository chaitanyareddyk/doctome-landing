import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does Doctome work for booking doctor consultations?',
      answer:
        'Doctome allows you to book doctor consultations easily through the app. Simply select your preferred specialty, choose the doctor, and schedule the appointment at your convenient time. The doctor will visit your home for the consultation.',
    },
    {
      question: 'Can I order medicines and lab tests through the Doctome app?',
      answer:
        'Absolutely! Doctome offers the convenience of ordering medicines and lab tests from the comfort of your home. Our trusted pharmacy partners deliver medicines, and we ensure accurate and timely lab test results.',
    },
    {
      question: 'What is the process for availing home healthcare services with Doctome?',
      answer:
        'For home healthcare services like nurse assistance during illnesses, fever, or post-surgery care, you can request the service through the app. Our experienced nurses will be assigned to provide personalized care at your home.',
    },
  ],
  [
    {
      question: 'What are the consultation charges for doctors on Doctome?',
      answer:
        'We offer all doctor consultations at a flat rate of 500 INR, ensuring transparency and affordability for all our users.',
    },
    {
      question: 'Is Doctome available only in Hyderabad?',
      answer:
        'Currently, Doctome services are available exclusively in Hyderabad. However, we plan to expand to other cities soon. Stay tuned for updates!',
    },
    {
      question: 'How do I pay for consultations and services on Doctome?',
      answer:
        'We provide secure and hassle-free payment options. You can pay for consultations, medicines, and services through various online payment methods, including credit/debit cards and digital wallets.',
    },
  ],
  [
    {
      question: 'Are the doctors on Doctome qualified and experienced?',
      answer:
        'Yes, we onboard only qualified and experienced doctors who meet our stringent criteria. Our doctors are registered practitioners with proven expertise in their respective fields.',
    },
    {
      question: 'Can I reschedule or cancel my appointment with Doctome?',
      answer:
        'Of course! You can easily reschedule or cancel your appointment through the app. Please note that cancellations may be subject to certain terms and conditions.',
    },
    {
      question: 'Is my personal and medical information secure on Doctome?',
      answer:
        'Yes, your privacy is of utmost importance to us. We employ industry-standard security measures to safeguard your personal and medical information.',
    },
  ],
  [
    {
      question: 'How do I contact Doctome\'s customer support for any assistance?',
      answer:
        'For any queries or assistance, you can reach out to our customer support team through the app or website. We are available round the clock to address your concerns promptly.',
    },
    {
      question: 'Can I use Doctome for emergency medical situations?',
      answer:
        'While Doctome is a great platform for healthcare services, it is not intended for emergency situations. In case of emergencies, please call your local emergency number or visit the nearest hospital immediately.',
    },
    {
      question: 'What are the benefits of using Doctome for home healthcare?',
      answer:
        'Doctome offers the convenience of availing healthcare services at the comfort of your home. You can receive personalized care from experienced nurses during illnesses, which can lead to faster recovery and better overall well-being.',
    },
  ],
];


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
