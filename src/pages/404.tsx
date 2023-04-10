import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const NotFound: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Not found</title>
            </Head>
            {/* <img src="/404.png" alt="404" /> */}
            <div style={{ textAlign: "center" }}>
                <Image src="/not_found.png" alt="" width={450} height={450} />
            </div>
        </Layout>
    )
}

export default NotFound;
