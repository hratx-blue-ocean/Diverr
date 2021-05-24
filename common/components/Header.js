import { useSession, signIn, signOut } from "next-auth/client";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [session, loading] = useSession();
  return (
    <div className="header">
      <nav>
        <Link href="/">
          <a>NextAuth.js</a>
        </Link>
        {session && (
          <a href="#" onClick={signOut}>
            Sign Out
          </a>
        )}
        {!session && (
          <a href="#" onClick={signIn}>
            Sign In
          </a>
        )}
      </nav>
    </div>
  );
}
