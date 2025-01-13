import React from 'react'
import Header from './components/Privacy/header'
import End from './components/Privacy/End'

function Privacy() {
  return (
    <div>
        <Header />
        <main className='px-20 py-12'>
            <h3 className='text-xl font-semibold'>Your Data, Our Responsibility</h3>
            <p className='font-semibold mt-4'>At BiteBlitz, we are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data while you enjoy our food delivery services.</p>
            <ol>
                <li>
                    <h1 className='font-semibold mt-4'>1. General Information</h1>
                    <p className='mt-2'>At BiteBlitz, your privacy is our priority. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our food delivery website. By accessing or using our services, you agree to the practices described below.</p>
                </li>
                <li>
                    <h1 className='font-semibold mt-4'>2. Information We Collect</h1>
                    <p className='mt-2'>We collect personal data that you provide when signing up, placing orders, or contacting customer support. This includes:</p>
                    <ol>
                        <li>(i) Name, Email, and Phone Number</li>
                        <li>(ii) Delivery Address</li>
                        <li>(iii) Payment Information (encrypted and secure)</li>
                        <li>(iv) Order History and Preferences</li>
                    </ol>
                </li>
                <li>
                    <h1 className='font-semibold mt-4'>3. How We Use Your Information</h1>
                    <p className='mt-2'>We use the information we collect to:</p>
                    <ol>
                        <li>(i) Process and deliver your orders</li>
                        <li>(ii) Communicate with you about your orders or promotional offers</li>
                        <li>(iii) Personalize your user experience (e.g., by suggesting restaurants based on your order history)</li>
                    </ol>
                </li>
                <li>
                    <h1 className='font-semibold mt-4'>4. Data Sharing with Third Parties</h1>
                    <p className="mt-2">We may share your information with third-party service providers to ensure efficient delivery of services. This includes:</p>
                    <ol>
                        <li>(i) Payment processors</li>
                        <li>(ii) Delivery partners</li>
                        <li>(iii) Marketing and advertising platforms (with your consent)</li>
                    </ol>
                    <p className='mt-2'>We do not sell your personal data to third parties.</p>
                </li>
                <li>
                    <h1 className="font-semibold mt-4">5. Data Security</h1>
                    <p className="mt-2">We take the security of your information seriously. We use encryption, secure servers, and other safety measures to protect your personal data from unauthorized access, disclosure, or alteration.</p>
                </li>
                <li>
                    <h1 className="font-semibold mt-4">6. Cookies and Tracking Technologies</h1>
                    <p className="mt-2">We use cookies and similar technologies to enhance your browsing experience, track website usage, and provide personalized content. You can adjust your browser settings to refuse cookies, but this may affect certain functionalities on our website.</p>
                </li>
                <li>
                    <h1 className="font-semibold mt-4">7. Your Privacy Rights</h1>
                    <p className="mt-2">You have the right to access, correct, or delete your personal information at any time. You can also opt-out of marketing communications by updating your preferences in your account or by contacting us directly.</p>
                </li>
                <li>
                    <h1 className="font-semibold mt-4">8. Changes to the Privacy Policy</h1>
                    <p className="mt-2">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you via email or through the website if the changes are significant. Continued use of our services indicates your acceptance of the updated policy.</p>
                </li>
            </ol>
        </main>
        <End />
    </div>
  )
}

export default Privacy