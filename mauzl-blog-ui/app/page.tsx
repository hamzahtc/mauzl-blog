"use client";

import { useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
import { loadEditor } from "@/utils/editor";

export default function BlogEditor() {
  const editorRef = useRef<EditorJS | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    loadEditor().then((editor) => {
      if (isMounted) {
        editorRef.current = editor;
      }
    });

    return () => {
      isMounted = false;
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  const saveContent = async () => {
    if (editorRef.current) {
      const outputData = await editorRef.current.save();
      localStorage.setItem("blogContent", JSON.stringify(outputData));
      localStorage.setItem("blogTitle", title);
      alert("Blog post saved!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <input
        type="text"
        placeholder="Enter blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 text-2xl border rounded mb-4"
      />
      <div id="editorjs" className="border p-4 rounded bg-white"></div>
      <button
        onClick={saveContent}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Post
      </button>
    </div>
  );
}
