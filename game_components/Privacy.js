import React from 'react';

const Privacy = () => {
  return (
    <div className="mx-auto p-10 border-t border-b border-gray-300" id="privacy">
      <h2 className="text-2xl font-extrabold mb-4">Privacy Policy</h2>
      <p className="lg:text-lg text-base-content/80 leading-relaxed mb-8">
        At Sprunki Sprunked, we are committed to protecting your privacy and providing a secure online experience. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure your privacy is safeguarded.
      </p>

      <h3 className="text-xl font-bold mb-2">1. Information We Collect</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        We collect two types of information:
      </p>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-6">
        <li>
          <strong>Personal Information</strong>: This includes any information that can be used to identify or contact you, such as your name, email address, or any other information you voluntarily provide.
        </li>
        <li>
          <strong>Non-Personal Information</strong>: This includes information that does not identify you personally, such as your browser type, operating system, and the domain name of your Internet service provider.
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">2. How We Use Your Information</h3>
      <ul className="list-disc list-inside text-base-content/80 leading-relaxed mb-6">
        <li>
          <strong>Personal Information</strong>: We use your personal information to enhance your experience on our site, respond to your requests, and provide you with the services you have requested. We may also use your information to communicate with you about new features, solicit your feedback, or keep you informed about what's happening with our website.
        </li>
        <li>
          <strong>Non-Personal Information</strong>: We use non-personal information to improve our website, identify user preferences, and for other internal purposes.
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2">3. Sharing of Information</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        We do not sell, trade, or rent your personal information to others. We may share aggregated demographic information with our partners and advertisers, but this will not include personal information that can identify any individual person.
      </p>

      <h3 className="text-xl font-bold mb-2">4. Data Security</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. While no method of transmission over the Internet or method of electronic storage is 100% secure, we strive to use commercially acceptable means to protect your personal information.
      </p>

      <h3 className="text-xl font-bold mb-2">5. Cookies</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        We use cookies to help us remember and process your login session and to analyze how our website is used. Cookies are small data files that your web browser places on your computer when you visit a website. You have the choice to accept or decline cookies. If you choose to decline, some features of our site may not work as intended.
      </p>

      <h3 className="text-xl font-bold mb-2">6. Third-Party Websites</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        Our website may contain links to other websites. Please be aware that we are not responsible for the privacy practices of such other websites. We encourage you to read the privacy statements of every website that collects personally identifiable information.
      </p>

      <h3 className="text-xl font-bold mb-2">7. Changes to Our Privacy Policy</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        If we decide to change our Privacy Policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
      </p>

      <h3 className="text-xl font-bold mb-2">8. Contact Us</h3>
      <p className="text-base-content/80 leading-relaxed mb-4">
        If you have any questions or concerns regarding this Privacy Policy or our use of your information, please feel free to contact us at <a href="mailto:hi@sprunkisprunked.best" className="text-blue-500">hi@sprunkisprunked.best</a>. We value your privacy and are committed to protecting it.
      </p>

      <p className="lg:text-lg text-base-content/80 leading-relaxed mb-8">
        This Privacy Policy was last updated on 2024/11/18.
      </p>
    </div>
  );
};

export default Privacy;