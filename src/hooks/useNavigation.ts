'use client';

import { useRouter, usePathname } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (route: string) => {
    router.push(`/${route}`);
  };

  return { navigateTo, pathname };
};
