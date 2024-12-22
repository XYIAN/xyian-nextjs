'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/components';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

interface Props {}
const LISTOVERRIDE: React.CSSProperties | undefined = undefined;
const LIST_ITEM: React.CSSProperties = {
    padding: '.2rem 0 0 0',
};
const Privacy: NextPage<Props> = ({}) => {
    const Email = () => {
        return (
            <>
                &nbsp;
                <a
                    href='mailto:support@xyian.com'
                    className='underline text-blue-400'
                >
                    support@xyian.com
                </a>
            </>
        );
    };
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex flex-column justify-content-center pt-5 m-5'>
                    <h4>Privacy Policy</h4>
                    <p>
                        <strong>Effective Date:</strong> January, 1 2024
                    </p>
                    <p>
                        XYIAN Software (&quot;Company,&quot; &quot;we,&quot;
                        &quot;us,&quot; or &quot;our&quot;) operates the website
                        XYIAN.com (the &quot;Site&quot;) and provides software
                        products and services (collectively, the
                        &quot;Services&quot;). We value your privacy and are
                        committed to protecting your personal information.
                    </p>

                    <p>
                        This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you use
                        our Services. By accessing or using our Services, you
                        agree to this Privacy Policy.
                    </p>

                    <h4>1. Information We Collect</h4>
                    <p>
                        <strong>Personal Information:</strong> When you create
                        an account, contact us, or use our Services, we may
                        collect personal information such as your name, email
                        address, phone number, payment information, and any
                        other information you voluntarily provide.<br></br>
                        <strong>Usage Data:</strong> We may collect information
                        about your device, browsing actions, and patterns,
                        including your IP address, browser type, and operating
                        system.
                    </p>

                    <h4>2. How We Use Your Information</h4>
                    <p>
                        We may use your information for the following purposes:
                    </p>
                    <ul style={LISTOVERRIDE}>
                        <li style={LIST_ITEM}>
                            To provide, operate, and maintain our Services.
                        </li>
                        <li style={LIST_ITEM}>
                            To improve our website and Services.
                        </li>
                        <li style={LIST_ITEM}>
                            To communicate with you, including customer support
                            and notifications.
                        </li>
                        <li style={LIST_ITEM}>
                            To process payments and fulfill transactions.
                        </li>
                        <li style={LIST_ITEM}>
                            To enforce our terms, conditions, and policies.
                        </li>
                    </ul>

                    <h4>3. Sharing of Information</h4>
                    <p>
                        We do not sell or rent your personal information to
                        third parties. We may share your information with:
                    </p>
                    <ul style={LISTOVERRIDE}>
                        <li style={LIST_ITEM}>
                            <strong>Service Providers:</strong> Third parties
                            that help us provide and maintain the Services.
                        </li>
                        <li style={LIST_ITEM}>
                            <strong>Legal Compliance:</strong> When required by
                            law or to protect our rights.
                        </li>
                    </ul>

                    <h4>4. Security of Your Information</h4>
                    <p>
                        We use commercially reasonable efforts to secure your
                        personal information. However, no method of transmission
                        over the internet or electronic storage is 100% secure.
                        We cannot guarantee the absolute security of your
                        information.
                    </p>

                    <h4>5. Your Rights</h4>
                    <p>You have the right to:</p>
                    <ul style={LISTOVERRIDE}>
                        <li style={LIST_ITEM}>
                            Access, correct, or delete your personal
                            information.
                        </li>
                        <li style={LIST_ITEM}>
                            Opt-out of marketing communications.
                        </li>
                        <li style={LIST_ITEM}>
                            Restrict or object to processing of your personal
                            data.
                        </li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at
                        <Email />.
                    </p>

                    <h4>6. Changes to This Policy</h4>
                    <p>
                        We may update this Privacy Policy from time to time. We
                        will notify you of any changes by updating the
                        &quot;Effective Date&quot; at the top of this policy.
                    </p>

                    <h4>7. Contact Us</h4>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                    </p>
                    <p>
                        Email: <Email />
                        <br></br>
                        Address: XYIAN Software, Irvine, California, USA
                    </p>

                    <h4>Terms of Use</h4>
                    <p>
                        <strong>Effective Date:</strong> January 1, 2024
                    </p>
                    <p>
                        These Terms of Use (&quot;Terms&quot;) govern your
                        access to and use of the services provided by XYIAN
                        Software (&quot;Company,&quot; &quot;we,&quot;
                        &quot;us,&quot; or &quot;our&quot;), including our
                        website and software (collectively, the
                        &quot;Services&quot;). By accessing or using the
                        Services, you agree to be bound by these Terms.
                    </p>

                    <h4>1. Acceptance of Terms</h4>
                    <p>
                        By accessing or using our Services, you agree to be
                        bound by these Terms and our Privacy Policy. If you do
                        not agree to these Terms, do not use our Services.
                    </p>

                    <h4>2. Use of the Services</h4>
                    <p>
                        You agree to use the Services in compliance with these
                        Terms and all applicable laws. You must not:
                    </p>
                    <ul style={LISTOVERRIDE}>
                        <li style={LIST_ITEM}>
                            Use the Services for any illegal or unauthorized
                            purpose.
                        </li>
                        <li style={LIST_ITEM}>
                            Access or tamper with non-public areas of the
                            Services.
                        </li>
                        <li style={LIST_ITEM}>
                            Interfere with or disrupt the integrity of the
                            Services.
                        </li>
                    </ul>

                    <h4>3. Accounts</h4>
                    <p>
                        You may need to create an account to use certain
                        features of the Services. You are responsible for
                        maintaining the confidentiality of your account and
                        password. You agree to notify us immediately of any
                        unauthorized use of your account.
                    </p>

                    <h4>4. Fees and Payments</h4>
                    <p>
                        If you purchase any Services that we offer for a fee,
                        you agree to pay the applicable fees and taxes. We may
                        suspend or terminate your access to the Services if your
                        payment is late or your account is in arrears.
                    </p>

                    <h4>5. Intellectual Property</h4>
                    <p>
                        All content, trademarks, and logos on the Services are
                        the property of XYIAN Software or its licensors and are
                        protected by intellectual property laws. You may not use
                        our content or marks without our prior written
                        permission.
                    </p>

                    <h4>6. Termination</h4>
                    <p>
                        We may terminate or suspend your access to the Services
                        at any time for any reason, including your breach of
                        these Terms. Upon termination, your right to use the
                        Services will cease immediately.
                    </p>

                    <h4>7. Disclaimer of Warranties</h4>
                    <p>
                        The Services are provided &quot;as is&quot; without
                        warranties of any kind, whether express or implied. We
                        do not warrant that the Services will be uninterrupted
                        or error-free.
                    </p>

                    <h4>8. Limitation of Liability</h4>
                    <p>
                        In no event shall XYIAN Software be liable for any
                        indirect, incidental, special, or consequential damages
                        arising out of or related to your use of the Services,
                        even if we have been advised of the possibility of such
                        damages.
                    </p>

                    <h4>9. Governing Law</h4>
                    <p>
                        These Terms are governed by and construed in accordance
                        with the laws of the State of California, without regard
                        to its conflict of law principles.
                    </p>

                    <h4>10. Changes to Terms</h4>
                    <p>
                        We may update these Terms from time to time. If we make
                        material changes, we will notify you by posting the
                        revised Terms on our website and updating the
                        &quot;Effective Date&quot; at the top of these Terms.
                    </p>

                    <h4>11. Contact Us</h4>
                    <p>
                        If you have any questions about these Terms, please
                        contact us at:
                    </p>
                    <p>
                        Email:
                        <Email />
                        <br></br>
                        Address: XYIAN Software, Irvine, California, USA
                    </p>
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Privacy;
