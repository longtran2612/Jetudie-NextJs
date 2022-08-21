import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Blog({ user, password }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, []);

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
