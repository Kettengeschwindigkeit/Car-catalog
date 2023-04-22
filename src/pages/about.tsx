import { NextPageAuth } from "@/interfaces/page.interface";
import Layout from "@/components/layout/Layout";

const AboutPage: NextPageAuth = () => {
    return <Layout title="About">about</Layout>
};

AboutPage.isOnlyUser = true;

export default AboutPage;
