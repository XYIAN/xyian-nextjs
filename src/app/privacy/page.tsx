'use client';
import {
    PRIVACY_POLICY_SECTIONS,
    TERMS_OF_USE_SECTIONS,
    PolicySection,
} from '@/constants';

const Email = () => (
    <>
        &nbsp;
        <a href='mailto:support@xyian.com' className='underline text-blue-400'>
            support@xyian.com
        </a>
    </>
);

const RenderText = ({ text }: { text: string }) => {
    if (!text.includes('{{EMAIL}}')) return <>{text}</>;
    const [before, after] = text.split('{{EMAIL}}');
    return (
        <>
            {before}
            <Email />
            {after}
        </>
    );
};

const SectionContent = ({ items }: { items: string[] }) => {
    const elements: React.ReactNode[] = [];
    let bullets: string[] = [];
    const flush = (key: number) => {
        if (!bullets.length) return;
        elements.push(
            <ul key={`ul-${key}`}>
                {bullets.map((b, j) => (
                    <li key={j} style={{ padding: '.2rem 0 0 0' }}>
                        <RenderText text={b} />
                    </li>
                ))}
            </ul>
        );
        bullets = [];
    };
    items.forEach((item, i) => {
        if (item.startsWith('• ')) {
            bullets.push(item.substring(2));
        } else {
            flush(i);
            elements.push(
                <p key={i}>
                    <RenderText text={item} />
                </p>
            );
        }
    });
    flush(items.length);
    return <>{elements}</>;
};

const PolicySectionList = ({
    title,
    effectiveDate,
    sections,
}: {
    title: string;
    effectiveDate: string;
    sections: PolicySection[];
}) => (
    <>
        <h4>{title}</h4>
        <p>
            <strong>Effective Date:</strong> {effectiveDate}
        </p>
        {sections.map((section, i) => (
            <div key={i}>
                {section.heading && <h4>{section.heading}</h4>}
                <SectionContent items={section.content} />
            </div>
        ))}
    </>
);

const Privacy = () => (
    <main>
        <div className='flex flex-column justify-content-center pt-5 m-5'>
            <PolicySectionList
                title='Privacy Policy'
                effectiveDate='January, 1 2024'
                sections={PRIVACY_POLICY_SECTIONS}
            />
            <PolicySectionList
                title='Terms of Use'
                effectiveDate='January 1, 2024'
                sections={TERMS_OF_USE_SECTIONS}
            />
        </div>
    </main>
);

export default Privacy;
