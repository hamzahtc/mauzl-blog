import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        disabled={currentPage === 1}
        asChild
      >
        <Link href={`?page=${currentPage - 1}`}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Link>
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant="outline"
          size="icon"
          className={cn(
            "h-8 w-8 rounded-full",
            currentPage === page &&
              "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          asChild
        >
          <Link href={`?page=${page}`}>{page}</Link>
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        disabled={currentPage === totalPages}
        asChild
      >
        <Link href={`?page=${currentPage + 1}`}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      </Button>
    </div>
  );
}

export const PaginationContent = () => null;
export const PaginationItem = () => null;
export const PaginationLink = () => null;
export const PaginationEllipsis = () => null;
export const PaginationPrevious = () => null;
export const PaginationNext = () => null;
