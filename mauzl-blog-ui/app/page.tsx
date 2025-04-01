import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeaturedBlog } from "@/components/blog/featured-blog";
import { CategoryPill } from "@/components/blog/category-pill";
import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute inset-0 -z-10 opacity-30">
          <svg
            className="h-full w-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/20"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              <span>Explore cultures from around the world</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
              Discover the world through
              <span className="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/30"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative text-primary"> cultural stories</span>
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Immerse yourself in traditions, cuisines, arts, and lifestyles
              from different cultures around the globe. Join our community of
              explorers and storytellers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/blogs">
                  Explore Blogs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/editor">Create Your Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive into different aspects of global cultures and discover
              stories that resonate with you
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                name: "Cuisine",
                icon: "🍜",
                color: "from-amber-500 to-orange-600",
              },
              {
                name: "Music",
                icon: "🎵",
                color: "from-violet-500 to-purple-600",
              },
              {
                name: "Traditions",
                icon: "🏮",
                color: "from-primary to-pink-600",
              },
              { name: "Art", icon: "🎨", color: "from-blue-500 to-cyan-600" },
              {
                name: "Fashion",
                icon: "👘",
                color: "from-emerald-500 to-green-600",
              },
              {
                name: "Languages",
                icon: "💬",
                color: "from-yellow-500 to-amber-600",
              },
              {
                name: "Architecture",
                icon: "🏛️",
                color: "from-slate-500 to-gray-600",
              },
              {
                name: "Festivals",
                icon: "🎭",
                color: "from-rose-500 to-red-600",
              },
            ].map((category) => (
              <CategoryPill
                key={category.name}
                name={category.name}
                icon={category.icon}
                colorClass={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16 bg-muted/30">
        <div className="container p-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              {/* <Globe className="h-5 w-5 text-primary" /> */}
              <h2 className="text-2xl font-bold">Featured Story</h2>
            </div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <FeaturedBlog
            title="The Secret Language of Henna Art"
            excerpt="For centuries, henna art has adorned the hands and feet of people across North Africa, the Middle East, and South Asia, especially during weddings and special celebrations. The intricate patterns aren't just decorative – they tell stories, convey wishes, and represent cultural values that have been passed down through generations."
            image="/placeholder.svg?height=600&width=1200"
            category="Art & Traditions"
            author={{
              name: "Priya Sharma",
              avatar: "/placeholder.svg?height=100&width=100",
            }}
            date="March 15, 2023"
            readTime="8 min read"
            slug="/articles/secret-language-henna-art"
          />
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">Latest Stories</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <Button variant="ghost" className="group" asChild>
              <Link href="/blogs">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Street Food Revolution in Mexico City",
                excerpt:
                  "How tacos, tlayudas and tamales are getting a modern makeover while preserving traditional flavors and techniques.",
                image: "/placeholder.svg?height=400&width=600",
                category: "Cuisine",
                author: {
                  name: "Carlos Rodriguez",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                date: "March 22, 2023",
                slug: "/blog/street-food-revolution-mexico",
              },
              {
                title: "The Evolution of K-Pop Dance",
                excerpt:
                  "From traditional Korean dance forms to the precision choreography that has captivated global audiences.",
                image: "/placeholder.svg?height=400&width=600",
                category: "Music & Performance",
                author: {
                  name: "Min-ji Park",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                date: "March 28, 2023",
                slug: "/blog/evolution-kpop-dance",
              },
              {
                title: "Sustainable Fashion in Scandinavia",
                excerpt:
                  "How Nordic designers are leading the way in eco-friendly clothing while drawing inspiration from their cultural heritage.",
                image: "/placeholder.svg?height=400&width=600",
                category: "Fashion",
                author: {
                  name: "Emma Johansson",
                  avatar: "/placeholder.svg?height=100&width=100",
                },
                date: "April 3, 2023",
                slug: "/blog/sustainable-fashion-scandinavia",
              },
            ].map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                excerpt={blog.excerpt}
                image={blog.image}
                category={blog.category}
                author={blog.author}
                date={blog.date}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container p-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
