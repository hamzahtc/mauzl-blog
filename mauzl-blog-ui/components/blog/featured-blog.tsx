import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Author {
  name: string;
  avatar: string;
}

interface FeaturedBlogProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  slug: string;
}

export function FeaturedBlog({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  slug,
}: FeaturedBlogProps) {
  return (
    <Card className="overflow-hidden border-none bg-card shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
          <Badge className="mb-4 self-start">{category}</Badge>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-6">{excerpt}</p>
          <div className="flex items-center gap-3 mb-6">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author.name}</p>
              <p className="text-sm text-muted-foreground">
                {date} · {readTime}
              </p>
            </div>
          </div>
          <Button className="self-start group" asChild>
            <Link href={slug}>
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
