"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

interface ArticleReactionsProps {
  likes: number;
  comments: number;
  shares: number;
}

export function ArticleReactions({
  likes,
  comments,
  shares,
}: ArticleReactionsProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="sm"
        className={`flex items-center gap-2 ${liked ? "text-primary" : ""}`}
        onClick={handleLike}
      >
        <Heart className="h-5 w-5" fill={liked ? "currentColor" : "none"} />
        <span>{likeCount}</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5" />
        <span>{comments}</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <Share2 className="h-5 w-5" />
        <span>{shares}</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`ml-auto ${bookmarked ? "text-primary" : ""}`}
        onClick={handleBookmark}
      >
        <Bookmark
          className="h-5 w-5"
          fill={bookmarked ? "currentColor" : "none"}
        />
        <span className="sr-only">Bookmark</span>
      </Button>
    </div>
  );
}
