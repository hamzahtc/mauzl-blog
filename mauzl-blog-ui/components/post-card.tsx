import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { format } from "date-fns";
import type { Post } from "@/lib/mdx";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        {post.coverImage && (
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1 p-6">
        {post.publishedAt && (
          <p className="text-sm text-muted-foreground">
            {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
          </p>
        )}
        <Link href={`/posts/${post.slug}`}>
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
