import { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { IMeta } from "../seo/meta.interface";
import Meta from "../seo/Meta";
import Header from "./header/Header";

const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false })

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <Header />
            <main>
                {children}
            </main>
            <DynamicFooter />
        </Meta>
    )
}

export default Layout;
