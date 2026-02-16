import { createClient } from "@/utils/supabase/server";
import { LoginButton, LogoutButton } from "./login-button";
import AddBookmark from "./components/AddBookmark";
import BookmarkList from "./components/BookmarkList";

export default async function Page() {
  const supabase =  await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
  <div className="min-h-screen bg-gray-100 flex justify-center p-6">
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">

      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Smart Bookmark
      </h1>

      {user ? (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-500">Logged in as</p>
            <h2 className="font-semibold">{user.email}</h2>
            <div className="mt-3">
              <LogoutButton />
            </div>
          </div>

          <AddBookmark />
          <BookmarkList userId={user.id} />
        </div>
      ) : (
        <div className="flex justify-center">
          <LoginButton />
        </div>
      )}
    </div>
  </div>
);

    
}
