export interface PolicySection {
    heading: string;
    content: string[];
}

export const PRIVACY_POLICY_SECTIONS: PolicySection[] = [
    {
        heading: '',
        content: [
            'XYIAN Software ("Company," "we," "us," or "our") operates the website XYIAN.com (the "Site") and provides software products and services (collectively, the "Services"). We value your privacy and are committed to protecting your personal information.',
            'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. By accessing or using our Services, you agree to this Privacy Policy.',
        ],
    },
    {
        heading: '1. Information We Collect',
        content: [
            'Personal Information: When you create an account, contact us, or use our Services, we may collect personal information such as your name, email address, phone number, payment information, and any other information you voluntarily provide.',
            'Usage Data: We may collect information about your device, browsing actions, and patterns, including your IP address, browser type, and operating system.',
        ],
    },
    {
        heading: '2. How We Use Your Information',
        content: [
            'We may use your information for the following purposes:',
            '• To provide, operate, and maintain our Services.',
            '• To improve our website and Services.',
            '• To communicate with you, including customer support and notifications.',
            '• To process payments and fulfill transactions.',
            '• To enforce our terms, conditions, and policies.',
        ],
    },
    {
        heading: '3. Sharing of Information',
        content: [
            'We do not sell or rent your personal information to third parties. We may share your information with:',
            '• Service Providers: Third parties that help us provide and maintain the Services.',
            '• Legal Compliance: When required by law or to protect our rights.',
        ],
    },
    {
        heading: '4. Security of Your Information',
        content: [
            'We use commercially reasonable efforts to secure your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your information.',
        ],
    },
    {
        heading: '5. Your Rights',
        content: [
            'You have the right to:',
            '• Access, correct, or delete your personal information.',
            '• Opt-out of marketing communications.',
            '• Restrict or object to processing of your personal data.',
            'To exercise any of these rights, please contact us at {{EMAIL}}.',
        ],
    },
    {
        heading: '6. Changes to This Policy',
        content: [
            'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this policy.',
        ],
    },
    {
        heading: '7. Contact Us',
        content: [
            'If you have any questions about this Privacy Policy, please contact us at:',
            'Email: {{EMAIL}}',
            'Address: XYIAN Software, Irvine, California, USA',
        ],
    },
];

export const TERMS_OF_USE_SECTIONS: PolicySection[] = [
    {
        heading: '',
        content: [
            'These Terms of Use ("Terms") govern your access to and use of the services provided by XYIAN Software ("Company," "we," "us," or "our"), including our website and software (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms.',
        ],
    },
    {
        heading: '1. Acceptance of Terms',
        content: [
            'By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not use our Services.',
        ],
    },
    {
        heading: '2. Use of the Services',
        content: [
            'You agree to use the Services in compliance with these Terms and all applicable laws. You must not:',
            '• Use the Services for any illegal or unauthorized purpose.',
            '• Access or tamper with non-public areas of the Services.',
            '• Interfere with or disrupt the integrity of the Services.',
        ],
    },
    {
        heading: '3. Accounts',
        content: [
            'You may need to create an account to use certain features of the Services. You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.',
        ],
    },
    {
        heading: '4. Fees and Payments',
        content: [
            'If you purchase any Services that we offer for a fee, you agree to pay the applicable fees and taxes. We may suspend or terminate your access to the Services if your payment is late or your account is in arrears.',
        ],
    },
    {
        heading: '5. Intellectual Property',
        content: [
            'All content, trademarks, and logos on the Services are the property of XYIAN Software or its licensors and are protected by intellectual property laws. You may not use our content or marks without our prior written permission.',
        ],
    },
    {
        heading: '6. Termination',
        content: [
            'We may terminate or suspend your access to the Services at any time for any reason, including your breach of thes Terms. Upon termination, your right to use the Services will cease immediately.',
        ],
    },
    {
        heading: '7. Disclaimer of Warranties',
        content: [
            'The Services are provided "as is" without warranties of any kind, whether express or implied. We do not warrant that the Services will be uninterrupted or error-free.',
        ],
    },
    {
        heading: '8. Limitation of Liability',
        content: [
            'In no event shall XYIAN Software be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Services, even if we have been advised of the possibility of such damages.',
        ],
    },
    {
        heading: '9. Governing Law',
        content: [
            'These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.',
        ],
    },
    {
        heading: '10. Changes to Terms',
        content: [
            'We may update these Terms from time to time. If we make material changes, we will notify you by posting the revised Terms on our website and updating the "Effective Date" at the top of these Terms.',
        ],
    },
    {
        heading: '11. Contact Us',
        content: [
            'If you have any questions about these Terms, please contact us at:',
            'Email: {{EMAIL}}',
            'Address: XYIAN Software, Irvine, California, USA',
        ],
    },
];
