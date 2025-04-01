// import { Toaster } from "sonner";
// import { PlateEditor } from "@/components/editor/plate-editor";
// import { SettingsProvider } from "@/components/editor/settings";

// export default function Page() {
//   return (
//     <div
//       className="min-h-screen w-full py-12 px-4 flex justify-center"
//       data-registry="plate"
//     >
//       <SettingsProvider>
//         <div className="w-full max-w-6xl border rounded-lg shadow-md p-2 bg-white">
//           <PlateEditor />
//         </div>
//       </SettingsProvider>
//       <Toaster />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlateEditor } from "@/components/editor/plate-editor";
import { Toaster } from "sonner";

export default function EditorPage() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogCategory, setBlogCategory] = useState("");

  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-4">Create Your Story</h1>
          <p className="text-muted-foreground max-w-3xl">
            Share your cultural experiences, insights, and stories with our
            global community.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 px-4">
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter your blog title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a short summary of your blog"
                  value={blogExcerpt}
                  onChange={(e) => setBlogExcerpt(e.target.value)}
                  className="resize-none h-20"
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={blogCategory} onValueChange={setBlogCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="art">Art & Traditions</SelectItem>
                    <SelectItem value="cuisine">Cuisine</SelectItem>
                    <SelectItem value="music">Music & Performance</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="traditions">Traditions</SelectItem>
                    <SelectItem value="architecture">Architecture</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                    <SelectItem value="festivals">Festivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Content</Label>
                <div
                  className="w-full flex justify-center @container"
                  data-registry="plate"
                >
                  {/* <SettingsProvider> */}
                  <div className="@md:w-full border rounded-lg p-2 bg-white overflow-auto">
                    <PlateEditor />
                  </div>
                  {/* </SettingsProvider> */}
                  <Toaster />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-muted/30 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Tips for Writing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Use clear, engaging language to connect with readers
                  </li>
                  <li>
                    • Include personal experiences to make your story authentic
                  </li>
                  <li>
                    • Add images to illustrate your points (you can upload them
                    in the final step)
                  </li>
                  <li>• Break up text with headings for better readability</li>
                  <li>• Proofread your content before publishing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Markdown Cheatsheet
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bold</span>
                    <code className="bg-muted px-1 rounded">**text**</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Italic</span>
                    <code className="bg-muted px-1 rounded">*text*</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Heading 1</span>
                    <code className="bg-muted px-1 rounded"># text</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Heading 2</span>
                    <code className="bg-muted px-1 rounded">## text</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Link</span>
                    <code className="bg-muted px-1 rounded">[text](url)</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Image</span>
                    <code className="bg-muted px-1 rounded">![alt](url)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
