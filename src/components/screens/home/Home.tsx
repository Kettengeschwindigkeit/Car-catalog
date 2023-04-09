import { FC } from "react";
import { Titillium_Web } from "next/font/google";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import styles from "./Home.module.scss";

const titillium = Titillium_Web({ weight: ["300", "400", "600", "700"], subsets: ["latin"] })

const Home: FC = () => {
    return (
        <Layout>
            <h1 style={titillium.style}>Megadeth</h1>
        </Layout>
    )
};

export default Home;
