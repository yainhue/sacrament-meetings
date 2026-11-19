'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export function Pagination({
  totalPages,
}: PaginationProps){

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page")) || 1
  const totalPagesArray = Array.from(
  { length: totalPages },
  (_, index) => index + 1
);
  // const totalPagesArray = [1, 2, 3, 4, 5]


function createPageURL(pageNumber: number) {
  const newPage = Math.max(1, pageNumber);

  params.set("page", newPage.toString());

  return `${pathname}?${params.toString()}`;

}

return (
  <div className="flex items-center justify-center gap-3 my-10">

    <Link
      className="flex items-center justify-center h-11 px-4 rounded-lg bg-[#e8eefc] text-[#1c398e] hover:text-[#10245f] hover:font-bold transition-colors"
      href={createPageURL(currentPage - 1)}
    >
      ⟪
    </Link>

    <div className="flex gap-2">
      {totalPagesArray.map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`
            flex items-center justify-center
            h-11 w-11 rounded-lg
            font-medium
            transition-colors
            ${
              currentPage === page
                ? "bg-[#1c398e] text-white"
                : "bg-[#e8eefc] text-[#1c398e] hover:bg-[#d7e3fb]"
            }
          `}
        >
          {page}
        </Link>
      ))}
    </div>

    <Link
      className="flex items-center justify-center h-11 px-4 rounded-lg bg-[#e8eefc] text-[#1c398e] hover:text-[#10245f] hover:font-bold transition-colors"
      href={createPageURL(currentPage + 1)}
    >
      ⟫
    </Link>

  </div>
)};