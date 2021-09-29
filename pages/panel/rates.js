import { signIn, useSession, getSession } from "next-auth/client";
import { log, encrypt, decrypt, getCookie } from "../../utils/common";

export default function Rates(data) {
  const { loading, session } = useSession();
  console.log({ pagerates__: session });
  
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

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

// Export the `session` prop to use sessions with Server Side Rendering

export async function getServerSideProps({ req, res, params }) {
    const session = await getSession(req, res);
    console.log({ rates__: session });
    //if not valid session, redirect to login
    
  if (!session) {
    /*
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
    */
  }
  

    return {
      props: {
        session,
      },
    };
}