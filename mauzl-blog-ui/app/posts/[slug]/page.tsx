import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { slug } = params;
  const res = await fetch(
    `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`,
    { cache: "force-cache" }
  );

  const json = await res.json();
  const post = json.data?.[0]?.content;

  if (!post) {
    notFound();
  }
  console.log("SEEEERVEEEER");

  return (
    <article className="prose mx-auto p-6">
      <MDXRemote source={post} components={components} />
    </article>
  );
}

export function generateStaticParams() {
  return [{ slug: "the-spiritual-sounds-of-essaouira" }];
}

export const dynamicParams = false;
