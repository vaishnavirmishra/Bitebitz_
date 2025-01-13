import React from 'react'
import Header from './components/Privacy/header'
import End from './components/Privacy/End'

function Terms() {
  return (
    <div>
        <Header />
        <main className='px-20 py-12'>
            <p className='text-xl font-semibold'>Your use of BiteBlitz is subject to these terms.</p>
            <p className='text-xl font-semibold mt-4'>Welcome to BiteBlitz! By using our services, you agree to the following terms and conditions. Please read them carefully.</p>
            <h1 className='mt-8 font-semibold text-lg'>1. General Information</h1>
            <p>These terms govern your use of BiteBlitz and its services. By accessing our platform, you agree to comply with these terms.</p>
            <h1 className='mt-8 font-semibold text-lg'>2. User Responsibilities</h1>
            <p>As a user, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            <h1 className='mt-8 font-semibold text-lg'>3. Orders and Payments</h1>
            <p>All orders placed through BiteBlitz are subject to our acceptance. We reserve the right to cancel or refuse any order at our discretion.</p>
            <h1 className='mt-8 font-semibold text-lg'>4. Delivery</h1>
            <p>We strive to deliver your orders promptly. However, delivery times may vary based on various factors, and we are not liable for any delays.</p>
            <h1 className='mt-8 font-semibold text-lg'>5. Refunds and Cancellations</h1>
            <p>Refunds and cancellations are handled on a case-by-case basis. Please refer to our Refund Policy for more details.</p>
            <h1 className='mt-8 font-semibold text-lg'>6. Limitation of Liability</h1>
            <p>BiteBlitz is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
            <h1 className='mt-8 font-semibold text-lg'>7. Changes to Terms</h1>
            <p>We may update these terms from time to time. Your continued use of our services constitutes acceptance of the revised terms.</p>
            <h1 className='mt-8 font-semibold text-lg'>8. Contact Information</h1>
            <p>If you have any questions about these terms, please contact us at <span className='text-blue-700 font-semibold underline'>legal@biteblitz.com</span></p>
        </main>
        <End />
    </div>
  )
}

export default Terms