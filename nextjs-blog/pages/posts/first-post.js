import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <h1>First Post</h1>
      </Head>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>

      <Alert type={"success"}>
        <h3>Success</h3>
      </Alert>
    </Layout>
  );
}
