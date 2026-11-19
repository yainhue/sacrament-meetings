'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className='flex gap-6'>
      <Link
        href="/"
        className={pathname === '/' ? 'active' : ''}
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        Home
      </Link>
      <Link
        href="/meetings"
        className={pathname === '/meetings' ? 'active' : ''}
        aria-current={pathname === '/meetings' ? 'page' : undefined}
      >
       Meetings
      </Link>
            <Link
        href="/meetings/current"
        className={pathname === '/meeting/1' ? 'active' : ''}
        aria-current={pathname === '/meeting/1' ? 'page' : undefined}
      >
       Current Meeting
      </Link>
    </nav>
  );
}