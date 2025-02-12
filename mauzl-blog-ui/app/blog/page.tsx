import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | My Next.js App",
  description: "Read the latest blog posts.",
};

// Placeholder function simulating fetching blog data from a database
async function fetchBlogPost() {
  return {
    title: "Sample Blog Post",
    content: [
      { type: "header", data: { text: "Welcome to my blog" } },
      { type: "paragraph", data: { text: "This is a sample blog post." } },
      {
        type: "list",
        data: { style: "unordered", items: ["Item 1", "Item 2"] },
      },
    ],
  };
}

export default async function BlogPage() {
  const blogPost = await fetchBlogPost(); // Simulated server-side fetch

  const renderBlock = (block: { type: string; data: any }) => {
    switch (block.type) {
      case "paragraph":
        return <p className="text-lg mb-2">{block.data.text}</p>;
      case "header":
        return <h2 className="text-xl font-bold my-2">{block.data.text}</h2>;
      case "list":
        return block.data.style === "ordered" ? (
          <ol className="list-decimal ml-5">
            {block.data.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <ul className="list-disc ml-5">
            {block.data.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      default:
        return <p className="text-gray-500">[Unsupported block type]</p>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <div className="space-y-4">
        {blogPost.content.map((block, index) => (
          <div key={index}>{renderBlock(block)}</div>
        ))}
      </div>
    </div>
  );
}
