"use client";

import { Button } from "@/components/ui/button";
// import { toast } from "@/hooks/use-toast";
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const fullUrl = `https://mauzl.com${url}`;

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        fullUrl
      )}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        fullUrl
      )}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareToLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        fullUrl
      )}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      // toast({
      //   title: "Link copied!",
      //   description: "The article link has been copied to your clipboard.",
      // });
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="icon" onClick={shareToFacebook}>
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share to Facebook</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareToTwitter}>
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share to Twitter</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareToLinkedin}>
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share to LinkedIn</span>
      </Button>
      <Button variant="outline" size="icon" onClick={copyToClipboard}>
        <Link2 className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  );
}
