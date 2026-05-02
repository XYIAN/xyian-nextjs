'use client';
import { useRouter, usePathname } from 'next/navigation';

const CommonFunctions = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigateClick = (to: string) => {
        if (pathname !== `/${to}`) {
            router.push(`/${to}`);
        }
    };

    return { handleNavigateClick };
};

export default CommonFunctions;
