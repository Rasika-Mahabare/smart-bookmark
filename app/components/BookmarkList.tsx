"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function BookmarkList({ userId }: { userId: string }) {
  const supabase = createClient();
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  // fetch bookmarks
  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setBookmarks(data);
  };

  useEffect(() => {
    fetchBookmarks();

    // realtime subscription
    const channel = supabase
      .channel("bookmarks-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        () => {
          fetchBookmarks();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // delete bookmark
  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id);
  };

  return (
  <div className="mt-6 space-y-4">
    <h2 className="text-xl font-semibold">Your Bookmarks</h2>

    {bookmarks.length === 0 && (
      <p className="text-gray-500">No bookmarks yet</p>
    )}

    {bookmarks.map((b) => (
      <div
        key={b.id}
        className="flex justify-between items-center bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
      >
        <a
          href={b.url}
          target="_blank"
          className="text-blue-600 font-medium hover:underline break-all"
        >
          {b.title}
        </a>

        <button
          onClick={() => deleteBookmark(b.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

}
