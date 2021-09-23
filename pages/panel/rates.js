import { signIn, useSession, getSession } from "next-auth/client";

export default function Rates(data) {
  //const { session } = data;
  const { loading, session } = useSession();
  console.log({ pagerates__: session });
  // When rendering client side don't display anything until loading is complete
  //if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    signIn();
    return (
      <>
        <h1>Redirecting...</h1>
      </>
    );
  } else {
    // If session exists, display content
    return (
      <>
        <h1>Protected Page</h1>
        <p>
          <button onClick={() => signOut()}>Sign out</button>
        </p>
        </>
    );
  }
}

// Export the `session` prop to use sessions with Server Side Rendering
/*
export async function getServerSideProps({ req, res, params }) {
  try {
    const session = await getSession(req, res);
    console.log({ rates__: session });
    const email = session?.user?.email;
    //if not valid session, redirect to login
    /*
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }
  * /

    /*
  //get user permissions
  let permissions = null;
  if (!!User) {
    permissions = await User.getPermissions();
  }
  * /

    return {
      props: {
        session,
      },
    };
  } catch (e) {
    return new Error("Error: " + JSON.stringify(e));
  }
}
*/