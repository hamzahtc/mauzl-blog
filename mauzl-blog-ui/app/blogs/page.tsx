// export default async function PostsPage() {
//   const res = await fetch(
//     `http://localhost:1337/api/posts?populate=coverImage`,
//     {
//       next: { revalidate: 60 },
//     }
//   );
//   const json = await res.json();
//   const posts = json.data as Post[];
//   console.log("SEEEERVEEEER");
//   return (
//     <div>
//       <div className="container px-4 md:px-6 py-8 md:py-12">
//         <div className="flex flex-col items-center text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
//             All Posts
//           </h1>
//           <p className="text-muted-foreground max-w-[700px]">
//             Browse all our articles and tutorials
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <PostCard key={post.slug} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { Pagination } from "@/components/ui/pagination";
import { CategoryFilter } from "@/components/blog/category-filter";

interface CoverImage {
  formats: {
    medium: {
      url: string;
    };
  };
}

export interface Blog {
  title: string;
  summary?: string;
  coverImage?: CoverImage[];
  publishedAt?: string;
  slug: string;
}

export default async function BlogsPage() {
  const res = await fetch(
    `http://localhost:1337/api/posts?populate=coverImage`,
    {
      next: { revalidate: 60 },
    }
  );
  const json = await res.json();
  const blogs = json.data as Blog[];
  console.log("SEEEERVEEEER");

  // In a real app, you would fetch blogs from a database or API
  // const blogs = [
  //   {
  //     title: "The Secret Language of Henna Art",
  //     excerpt:
  //       "Discover the hidden meanings behind traditional Mehndi patterns and how they tell stories across generations.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Art & Traditions",
  //     author: {
  //       name: "Priya Sharma",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "March 15, 2023",
  //     slug: "/blog/secret-language-henna-art",
  //   },
  //   {
  //     title: "Street Food Revolution in Mexico City",
  //     excerpt:
  //       "How tacos, tlayudas and tamales are getting a modern makeover while preserving traditional flavors and techniques.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Cuisine",
  //     author: {
  //       name: "Carlos Rodriguez",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "March 22, 2023",
  //     slug: "/blog/street-food-revolution-mexico",
  //   },
  //   {
  //     title: "The Evolution of K-Pop Dance",
  //     excerpt:
  //       "From traditional Korean dance forms to the precision choreography that has captivated global audiences.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Music & Performance",
  //     author: {
  //       name: "Min-ji Park",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "March 28, 2023",
  //     slug: "/blog/evolution-kpop-dance",
  //   },
  //   {
  //     title: "Sustainable Fashion in Scandinavia",
  //     excerpt:
  //       "How Nordic designers are leading the way in eco-friendly clothing while drawing inspiration from their cultural heritage.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Fashion",
  //     author: {
  //       name: "Emma Johansson",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "April 3, 2023",
  //     slug: "/blog/sustainable-fashion-scandinavia",
  //   },
  //   {
  //     title: "The Art of Arabic Calligraphy",
  //     excerpt:
  //       "How ancient letterforms became modern art and continue to influence design across the Middle East and beyond.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Art & Traditions",
  //     author: {
  //       name: "Ahmed Hassan",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "April 10, 2023",
  //     slug: "/blog/art-arabic-calligraphy",
  //   },
  //   {
  //     title: "Wedding Traditions Around the World",
  //     excerpt:
  //       "From something borrowed to red dresses, explore how different cultures celebrate the union of two people.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Traditions",
  //     author: {
  //       name: "Sofia Chen",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "April 17, 2023",
  //     slug: "/blog/wedding-traditions-world",
  //   },
  //   {
  //     title: "The Soul of Flamenco",
  //     excerpt:
  //       "Exploring the passionate dance and music tradition from southern Spain and its deep cultural roots.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Music & Performance",
  //     author: {
  //       name: "Isabella Moreno",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "April 24, 2023",
  //     slug: "/blog/soul-of-flamenco",
  //   },
  //   {
  //     title: "Traditional Tea Ceremonies",
  //     excerpt:
  //       "The ritual and significance of tea preparation and consumption across different Asian cultures.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Cuisine",
  //     author: {
  //       name: "Hiroshi Tanaka",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "May 1, 2023",
  //     slug: "/blog/traditional-tea-ceremonies",
  //   },
  //   {
  //     title: "Indigenous Art of Australia",
  //     excerpt:
  //       "The world's oldest continuous art tradition and its contemporary expressions in modern Australia.",
  //     image: "/placeholder.svg?height=400&width=600",
  //     category: "Art & Traditions",
  //     author: {
  //       name: "Jade Williams",
  //       avatar: "/placeholder.svg?height=100&width=100",
  //     },
  //     date: "May 8, 2023",
  //     slug: "/blog/indigenous-art-australia",
  //   },
  // ];

  const categories = [
    "All",
    "Art & Traditions",
    "Cuisine",
    "Music & Performance",
    "Fashion",
    "Traditions",
    "Architecture",
    "Languages",
    "Festivals",
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-4">Explore Cultural Stories</h1>
          <p className="text-muted-foreground max-w-3xl">
            Discover traditions, cuisines, arts, and lifestyles from different
            cultures around the globe through our collection of immersive
            stories.
          </p>
        </div>

        <CategoryFilter categories={categories} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {blogs.map((blog, index) => {
            const imageUrl = blog.coverImage?.[0]?.formats?.medium?.url
              ? `http://localhost:1337${blog.coverImage[0].formats.medium.url}`
              : "/placeholder.svg";
            return (
              <BlogCard
                key={index}
                title={blog.title}
                excerpt={blog.summary || ""}
                /* eslint-disable */
                image={imageUrl}
                category={"Music & Performance"}
                author={{
                  name: "Hamza",
                  avatar: imageUrl,
                }}
                date={blog.publishedAt || ""}
                slug={`/blog/${blog.slug}`}
              />
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Pagination totalPages={5} currentPage={1} />
        </div>
      </div>
    </div>
  );
}
