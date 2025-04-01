import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { Blog } from "@/app/blogs/page";

interface PostCardProps {
  post: Blog;
}

export function PostCard({ post }: PostCardProps) {
  console.log(post);
  const coverImageUrl = post.coverImage?.[0]?.formats?.medium?.url
    ? `http://localhost:1337${post.coverImage[0].formats.medium.url}`
    : "/placeholder.svg";

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0 relative w-full aspect-video">
        {post.coverImage && post.coverImage[0] && (
          <Image
            src={coverImageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        )}
      </CardHeader>
      <CardContent className="flex-1 p-6">
        {post.publishedAt && (
          <p className="text-sm text-muted-foreground">
            {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
          </p>
        )}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-bold text-xl mt-2 mb-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        {post.summary && (
          <p className="text-muted-foreground line-clamp-2">{post.summary}</p>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}
