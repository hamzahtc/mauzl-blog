"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Flag } from "lucide-react";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  liked: boolean;
}

interface CommentSectionProps {
  articleSlug: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CommentSection({ articleSlug }: CommentSectionProps) {
  const [comment, setComment] = useState("");
  // In a real app, you would fetch comments from an API
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "Maya Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      content:
        "This article was so insightful! I never knew about the hidden meanings behind the different henna patterns. I'm planning my wedding next year and definitely want to incorporate some of these traditions.",
      date: "2 days ago",
      likes: 24,
      liked: false,
    },
    {
      id: "2",
      author: {
        name: "Raj Patel",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      content:
        "My grandmother used to apply henna for special occasions. This brought back so many memories. Thank you for preserving these cultural traditions!",
      date: "5 days ago",
      likes: 18,
      liked: true,
    },
  ]);

  const handleSubmitComment = () => {
    if (!comment.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      content: comment,
      date: "Just now",
      likes: 0,
      liked: false,
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  const toggleLike = (id: string) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
            liked: !comment.liked,
          };
        }
        return comment;
      })
    );
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

      <div className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-4 min-h-[100px]"
        />
        <Button onClick={handleSubmitComment}>Post Comment</Button>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-muted/30 rounded-lg">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage
                  src={comment.author.avatar}
                  alt={comment.author.name}
                />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="font-medium">{comment.author.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {comment.date}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Flag className="h-4 w-4" />
                    <span className="sr-only">Report</span>
                  </Button>
                </div>
                <p className="mb-3">{comment.content}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className={comment.liked ? "text-primary" : ""}
                  onClick={() => toggleLike(comment.id)}
                >
                  <Heart className="h-4 w-4 mr-1" />
                  {comment.likes}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
