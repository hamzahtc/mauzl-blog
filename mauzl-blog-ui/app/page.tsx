import { PostCard } from "@/components/post-card";
import { Post } from "@/lib/mdx";

export default async function PostsPage() {
  const res = await fetch(`http://localhost:1337/api/posts`, {
    cache: "force-cache",
  });
  const json = await res.json();
  const posts = json.data as Post[];
  console.log("SEEEERVEEEER");
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
          All Posts
        </h1>
        <p className="text-muted-foreground max-w-[700px]">
          Browse all our articles and tutorials
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
