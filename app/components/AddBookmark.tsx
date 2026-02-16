"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AddBookmark() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("You must be logged in");
      return;
    }

    const { error } = await supabase.from("bookmarks").insert({
      title,
      url,
      user_id: user.id,
    });

    if (error) {
      console.log(error);
      alert("Error saving bookmark");
    } else {
      setTitle("");
      setUrl("");
      alert("Bookmark saved!");
    }
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row gap-3"
  >
    <input
      type="text"
      placeholder="Website Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />

    <input
      type="url"
      placeholder="https://example.com"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />

    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add
    </button>
  </form>
);

   
}
