"use client";

import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export function LoginButton() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      // options: {
      //   redirectTo: "http://localhost:3000/auth/callback",
      // },
      options: {
      redirectTo: `${location.origin}/auth/callback`,
      },

    });
  };

  return <button onClick={loginWithGoogle}>Sign in with Google</button>;
}

export function LogoutButton() {
  const logout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return <button onClick={logout}>Logout</button>;
}

// "use client";

// import { createBrowserClient } from "@supabase/ssr";

// const supabase = createBrowserClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export default function LoginButton() {

//   const loginWithGoogle = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: "http://localhost:3000/auth/callback",
//       },
//     });
//   };

//   return (
//     <button onClick={loginWithGoogle}>
//       Sign in with Google
//     </button>
//   );
// }
