import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
}

interface Reactions {
  likes: number;
  comments: number;
}

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  slug: string;
  reactions: Reactions;
  compact?: boolean;
}

export function ArticleCard({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  slug,
  reactions,
  compact = false,
}: ArticleCardProps) {
  if (compact) {
    return (
      <Link href={slug} className="group">
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-3 gap-3">
            <div className="relative aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover rounded-l"
              />
            </div>
            <div className="col-span-2 p-3">
              <Badge variant="secondary" className="mb-2 text-xs">
                {category}
              </Badge>
              <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{date}</p>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={slug} className="group">
      <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow">
        <div className="relative aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge>{category}</Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-muted-foreground">
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-xs">{reactions.likes}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="text-xs">{reactions.comments}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
