import { NextPage } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const NotFound: NextPage = () => {
    return (
        <Layout>
            {/* <img src="/404.png" alt="404" /> */}
            <Image src="/not_found.png" alt="" width={450} height={450} />
        </Layout>
    )
}

export default NotFound;
