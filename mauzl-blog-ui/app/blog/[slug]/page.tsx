// import { notFound } from "next/navigation";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import { components } from "@/mdx-components";

// interface PageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export default async function Page(props: PageProps) {
//   const params = await props.params;
//   const { slug } = params;
//   const res = await fetch(
//     `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`,
//     { next: { revalidate: 60 } }
//   );

//   const json = await res.json();
//   const blog = json.data?.[0]?.content;

//   if (!blog) {
//     notFound();
//   }
//   console.log("SEEEERVEEEER");

//   return (
//     <article className="prose prose-lg mx-auto p-6 prose-table:table-auto prose-th:border prose-td:border">
//       <MDXRemote source={blog} components={components} />
//     </article>
//   );
// }

// export function generateStaticParams() {
//   return [{ slug: "the-spiritual-sounds-of-essaouira" }, { slug: "new-blog" }];
// }

// export const dynamicParams = true;

// export const revalidate = 60;

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Share2, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/mdx-components";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage(props: PageProps) {
  // This would be fetched from your CMS or API based on the slug
  const { slug } = await props.params;
  const res = await fetch(
    `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`,
    { next: { revalidate: 60 } }
  );

  const json = await res.json();
  const blog = json.data?.[0]?.content;

  if (!blog) {
    notFound();
  }
  console.log("SEEEERVEEEER");

  const article = {
    title: "The Vibrant World of Japanese Street Fashion",
    excerpt:
      "Explore the colorful subcultures of Harajuku, from Lolita to Visual Kei, and how they've shaped global fashion trends.",
    content: `
      <p class="lead">In the heart of Tokyo's Harajuku district, a fashion revolution has been ongoing for decades, influencing global style trends and challenging conventional fashion norms.</p>
      
      <p>Japanese street fashion emerged in the 1990s as a form of rebellion against the strict societal norms and expectations placed on Japanese youth. What began as small subcultural movements has evolved into globally recognized fashion styles that continue to inspire designers worldwide.</p>
      
      <h2>The Birth of Harajuku Fashion</h2>
      
      <p>Harajuku, a district in Shibuya, Tokyo, became the epicenter of Japanese street fashion following the 1964 Tokyo Olympics. The area saw an influx of Western influence, and by the 1970s and 1980s, it had become a gathering place for youth looking to express themselves through fashion.</p>
      
      <p>The closure of Harajuku's main street, Takeshita Dori, to vehicle traffic on Sundays in the 1980s created a space where young people could gather, showcase their unique styles, and be photographed. This weekly event, known as "Hokoten," was crucial in the development and spread of Harajuku fashion.</p>
      
      <h2>Major Subcultures and Styles</h2>
      
      <p>Japanese street fashion encompasses numerous subcultures, each with distinct aesthetics and philosophies:</p>
      
      <h3>Lolita Fashion</h3>
      
      <p>Inspired by Victorian and Edwardian children's clothing, Lolita fashion emphasizes modesty, elegance, and cuteness. The style features knee-length skirts or dresses with petticoats, blouses with high collars, and accessories like bonnets, headbows, and parasols.</p>
      
      <p>Lolita has several sub-styles, including:</p>
      
      <ul>
        <li><strong>Gothic Lolita:</strong> Darker colors and gothic elements</li>
        <li><strong>Sweet Lolita:</strong> Pastel colors and childlike motifs</li>
        <li><strong>Classic Lolita:</strong> Muted colors and vintage-inspired designs</li>
      </ul>
      
      <h3>Decora</h3>
      
      <p>Characterized by its maximalist approach, Decora involves layering numerous colorful accessories and clothing items. Practitioners often wear dozens of hair clips, multiple necklaces, and layer clothing items in bright, clashing colors.</p>
      
      <h3>Visual Kei</h3>
      
      <p>Originally associated with a music genre, Visual Kei fashion is theatrical and gender-bending, featuring elaborate hairstyles, dramatic makeup, and flamboyant costumes. The style draws inspiration from glam rock, punk, and gothic aesthetics.</p>
      
      <h3>Gyaru</h3>
      
      <p>Gyaru (from the English word "gal") emerged in the 1970s and is characterized by tanned skin, bleached hair, dramatic makeup, and revealing clothing. The style has evolved over decades, spawning numerous sub-styles like Ganguro, Yamanba, and Himegyaru.</p>
      
      <h2>Global Influence and Evolution</h2>
      
      <p>Japanese street fashion gained international attention in the late 1990s and early 2000s through magazines like FRUiTS, which documented the styles seen in Harajuku. The rise of the internet and social media further spread these unique fashion subcultures globally.</p>
      
      <p>Today, elements of Japanese street fashion can be seen in mainstream fashion, with designers like John Galliano, Marc Jacobs, and Gwen Stefani's Harajuku Lovers line drawing inspiration from these styles.</p>
      
      <h2>The Future of Japanese Street Fashion</h2>
      
      <p>While some claim that Japanese street fashion is declining due to fast fashion and globalization, others argue that it's simply evolving. New styles continue to emerge, and social media platforms like Instagram and TikTok have created new avenues for Japanese fashion enthusiasts to share their styles with the world.</p>
      
      <p>As fashion becomes increasingly globalized, the boundary-pushing creativity of Japanese street fashion continues to offer alternative perspectives on self-expression through clothing, ensuring its lasting impact on global fashion culture.</p>
    `,
    publishedAt: "2025-03-15",
    author: {
      name: "Yuki Tanaka",
      avatar: "/placeholder.jpg",
      bio: "Fashion journalist and cultural researcher based in Tokyo",
    },
    category: "Fashion",
    region: "Asia",
    location: "Tokyo, Japan",
    image: "/placeholder.svg?height=800&width=1600",
    tags: ["Japan", "Fashion", "Harajuku", "Subcultures", "Street Style"],
    relatedArticles: [
      {
        title: "The Evolution of Kimono in Modern Japan",
        excerpt:
          "How traditional Japanese garments are finding new life in contemporary fashion.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Fashion",
        region: "Asia",
        author: "Mei Yamamoto",
        avatar: "/placeholder-user.jpg",
      },
      {
        title: "Tokyo's Hidden Vintage Clothing Stores",
        excerpt:
          "Discover the best spots for unique fashion finds in Japan's capital.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Shopping",
        region: "Asia",
        author: "Alex Chen",
        avatar: "/placeholder-user.jpg",
      },
      {
        title: "How K-Pop Idols Are Influencing Asian Fashion Trends",
        excerpt:
          "The growing impact of Korean pop culture on style across the continent.",
        image: "/placeholder.svg?height=400&width=600",
        category: "Fashion",
        region: "Asia",
        author: "Ji-hoon Park",
        avatar: "/placeholder-user.jpg",
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="relative">
          <div className="relative h-[50vh] overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 container py-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-white mb-4 hover:text-primary transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary">{article.category}</Badge>
                <Badge variant="outline" className="text-white border-white">
                  {article.region}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                {blog.title}
              </h1>
              <div className="flex items-center gap-2 mt-4 text-white/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{article.location}</span>
              </div>
            </div>
          </div>

          <div className="container py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={article.author.avatar}
                        alt={article.author.name}
                      />
                      <AvatarFallback>
                        {article.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{article.author.name}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{blog.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p className="text-xl font-medium text-muted-foreground mb-8">
                    {article.excerpt}
                  </p>
                  <article className="prose prose-lg prose-table:table-auto prose-th:border prose-td:border">
                    <MDXRemote source={blog} components={components} />
                  </article>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Discussion</h3>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>YT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <textarea
                        className="w-full min-h-[100px] p-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Share your thoughts..."
                      />
                      <div className="flex justify-end mt-2">
                        <Button>Post Comment</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-lg border bg-card p-4">
                    <h3 className="font-medium mb-4">About the Author</h3>
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarImage
                          src={article.author.avatar}
                          alt={article.author.name}
                        />
                        <AvatarFallback>
                          {article.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{article.author.name}</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.author.bio}
                    </p>
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {article.relatedArticles.map((related, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div className="aspect-video relative">
                            <Image
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardHeader className="p-3">
                            <h4 className="font-medium text-base">
                              {related.title}
                            </h4>
                          </CardHeader>
                          <CardFooter className="p-3 pt-0 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage
                                  src={related.avatar}
                                  alt={related.author}
                                />
                                <AvatarFallback>
                                  {related.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-xs text-muted-foreground">
                                {related.author}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {related.category}
                            </Badge>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export const dynamicParams = true;

export const revalidate = 60;
