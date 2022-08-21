import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Blog({ user, password }) {
  const { status } = useSession();
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    async function auth() {
      if (!session) {
        signIn();
      }
    }
    auth()
  }, [session]);

  return (
    <div>
      <h1>
        {user} -- {password}
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  return {
    props: {
      user: user,
      password: password,
    },
  };
}
