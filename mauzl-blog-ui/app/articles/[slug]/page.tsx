import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { ArticleReactions } from "@/components/article-reactions";
import { CommentSection } from "@/components/comment-section";
import { SocialShare } from "@/components/social-share";
import { ArticleCard } from "@/components/article-card";

export default async function ArticlePage() {
  // This would be fetched from your CMS or API based on the slug

  // In a real app, you would fetch the article data based on the slug
  const article = {
    title: "The Secret Language of Henna Art",
    subtitle: "Discover the hidden meanings behind traditional Mehndi patterns",
    coverImage: "/placeholder.svg?height=800&width=1600",
    publishDate: "March 15, 2023",
    readTime: "8 min read",
    author: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Cultural researcher specializing in South Asian traditions",
    },
    category: "Art & Traditions",
    tags: ["Henna", "Mehndi", "Wedding Traditions", "Symbolism", "Body Art"],
    content: `
      <p class="lead">For centuries, henna art has adorned the hands and feet of people across North Africa, the Middle East, and South Asia, especially during weddings and special celebrations.</p>
      
      <p>The intricate patterns aren't just decorative – they tell stories, convey wishes, and represent cultural values that have been passed down through generations.</p>
      
      <h2>The Origins of Mehndi</h2>
      
      <p>The use of henna as a form of body art dates back to ancient Egypt, where it was used to stain the fingers and toes of Pharaohs before mummification. The practice spread throughout the region and evolved into the elaborate art form we recognize today.</p>
      
      <figure>
        <img src="/placeholder.svg?height=600&width=800" alt="Ancient henna traditions" />
        <figcaption>Historical depictions of henna application from the 12th century</figcaption>
      </figure>
      
      <p>In many cultures, the application of henna is a ceremonial ritual in itself. Women gather before weddings to apply mehndi on the bride, singing traditional songs and sharing wisdom about married life.</p>
      
      <h2>Decoding the Symbols</h2>
      
      <p>Each region has developed its own distinctive style and symbolism:</p>
      
      <ul>
        <li><strong>Peacocks</strong> represent beauty and grace</li>
        <li><strong>Lotus flowers</strong> symbolize purity and spiritual awakening</li>
        <li><strong>Vines and leaves</strong> represent growth and vitality</li>
        <li><strong>Geometric patterns</strong> often relate to the cosmos and universal order</li>
      </ul>
      
      <p>In bridal mehndi, it's traditional to hide the groom's name within the intricate design. According to folklore, the marriage won't be consummated until the groom finds his name in the pattern – a playful tradition that continues today.</p>
      
      <blockquote>
        "The darkness of the mehndi stain is believed to indicate the strength of love in a marriage or the depth of a mother-in-law's affection for her new daughter."
      </blockquote>
      
      <h2>Modern Interpretations</h2>
      
      <p>Today, henna artists around the world are pushing the boundaries of this ancient art form, incorporating contemporary designs while honoring traditional techniques.</p>
    `,
    reactions: {
      likes: 342,
      comments: 28,
      shares: 156,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto h-full relative z-10">
          <div className="absolute top-6 left-4 md:left-6">
            <Button
              variant="ghost"
              size="sm"
              className="bg-background/20 backdrop-blur-sm hover:bg-background/30 text-white"
              asChild
            >
              <Link href="/">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>
          <div className="absolute bottom-12 left-4 right-4 md:left-6 md:right-6">
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
              {article.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage
                  src={article.author.avatar}
                  alt={article.author.name}
                />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white font-medium">{article.author.name}</p>
                <p className="text-white/70 text-sm">
                  {article.publishDate} · {article.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            <div className="mt-12">
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <ArticleReactions
                likes={article.reactions.likes}
                comments={article.reactions.comments}
                shares={article.reactions.shares}
              />

              <Separator className="my-8" />

              <div className="flex items-center gap-4 mb-8">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                  <AvatarFallback>
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{article.author.name}</p>
                  <p className="text-muted-foreground">{article.author.bio}</p>
                </div>
              </div>

              <CommentSection articleSlug={""} />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Share this article
                </h3>
                <SocialShare
                  url={`/articles/${article.reactions.shares}`}
                  title={article.title}
                />
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Related Articles</h3>
                <div className="space-y-6">
                  <ArticleCard
                    title="The Art of Arabic Calligraphy"
                    excerpt="How ancient letterforms became modern art"
                    image="/placeholder.svg?height=400&width=600"
                    category="Art & Traditions"
                    author={{
                      name: "Ahmed Hassan",
                      avatar: "/placeholder.svg?height=100&width=100",
                    }}
                    date="Feb 28, 2023"
                    slug="/articles/art-arabic-calligraphy"
                    reactions={{
                      likes: 218,
                      comments: 14,
                    }}
                    compact
                  />
                  <ArticleCard
                    title="Wedding Traditions Around the World"
                    excerpt="From something borrowed to red dresses"
                    image="/placeholder.svg?height=400&width=600"
                    category="Traditions"
                    author={{
                      name: "Sofia Chen",
                      avatar: "/placeholder.svg?height=100&width=100",
                    }}
                    date="Mar 5, 2023"
                    slug="/articles/wedding-traditions-world"
                    reactions={{
                      likes: 276,
                      comments: 32,
                    }}
                    compact
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamicParams = true;

export const revalidate = 60;
