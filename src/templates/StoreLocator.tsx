import * as React from "react";
import Card from "../components/card";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
} from "@yext/pages";


export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
}): HeadConfig => {
    return {
        title: document.name,
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1",
        tags: [
            {
                type: "meta",
                attributes: {
                    name: "description",
                    content: document.description,
                },
            },
            // {
            //     type: "link",
            //     attributes: {
            //         rel: "icon",
            //         type: "image/x-icon",
            //         href: Favicon,
            //     },
            // },
        ],
    };
};

const StoreLocator = (title: any, url: string) => {
    const [apiData, setApiData] = React.useState([]);
    React.useEffect(() => {
        const url =
            "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=aae38614d0701660f74015c1c1fe1587&v=20230110&entityTypes=location";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            {apiData?.map((item: any) => {
                return (
                    <>
                        <div>
                            <Card title={item?.name} url={""} />
                        </div>
                    </>
                );
            })}
            ghsfdghfdsfdj
            <Footer />
        </>
    );
};

export default StoreLocator;