/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export const components = {
  h1: ({ children }: any) => (
    <h1 className="mt-10 scroll-m-20 text-4xl font-bold tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  a: ({ href, children }: any) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-primary underline underline-offset-4"
    >
      {children}
    </Link>
  ),
  ul: ({ children }: any) => (
    <ul className="my-6 ml-6 list-disc">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="my-6 ml-6 list-decimal">{children}</ol>
  ),
  li: ({ children }: any) => <li className="mt-2">{children}</li>,
  blockquote: ({ children }: any) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground">
      {children}
    </blockquote>
  ),
  pre: ({ children }: any) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-4 dark:bg-black">
      {children}
    </pre>
  ),
};
