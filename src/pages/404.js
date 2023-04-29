import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name="Keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Oh No!</h1>
        <h2>That page can not be found.</h2>
        <p>
          Go back to the <Link href="/">Home</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
