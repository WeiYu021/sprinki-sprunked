import React from 'react';

const Privacy = () => {
  return (
    <div className="p-10 bg-white border-t border-b border-gray-300">
      <h2 className="text-2xl font-extrabold mb-4">Privacy Policy</h2>
      <p className="mb-4">Last updated: September 23, 2024</p>

      <h3 className="text-xl font-bold mb-2">Introduction</h3>
      <p className="mb-4">
        Welcome to Sprunki.com. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h3 className="text-xl font-bold mb-2">Information We Collect</h3>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal Information: Such as your name, email address, and other contact details when you voluntarily provide them.</li>
        <li>Usage Data: Information on how you use our website, including your IP address, browser type, pages visited, and time spent on the site.</li>
        <li>Cookies and Similar Technologies: We use cookies to enhance your experience on our site. You can manage your cookie preferences through your browser settings.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">How We Use Your Information</h3>
      <p className="mb-4">
        We use the collected information for various purposes, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Providing and maintaining our services</li>
        <li>Improving and personalizing user experience</li>
        <li>Analyzing usage of our website</li>
        <li>Communicating with you about updates or inquiries</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Data Security</h3>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <h3 className="text-xl font-bold mb-2">Third-Party Links</h3>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.
      </p>

      <h3 className="text-xl font-bold mb-2">Children&apos;s Privacy</h3>
      <p className="mb-4">
        Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
      </p>

      <h3 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h3>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h3 className="text-xl font-bold mb-2">Contact Us</h3>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:hi@sprunki.com" className="text-blue-500">hi@sprunki.com</a>
      </p>
    </div>
  );
};

export default Privacy;