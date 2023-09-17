import * as React from "react";
import WidgetView from "./WidgetView";
import { Content, Tag } from "../types/types";
import { Api } from "../services/Api";
import LoadingIndicator from "./LoadingIndicator";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import fontSizeGenerator from "~/utils/fontSizeGenerator";
import Link from "next/link";

const generateFontSizes = (numTags: number) => {
  const fontSizes = [];
  for (let i = 0; i < numTags; i++) {
    fontSizes.push(fontSizeGenerator());
  }

  return fontSizes;
};

const SidebarView = () => {
  const [sidebarData, setSidebarData] = useState({
    recentPosts: [],
    tags: [],
  });
  const [fontSizes, setFontSizes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [api, setApi] = useState(undefined);

  // useEffect(() => {
  //   setApi(new Api());
  //
  //   if (api) {
  //     api!
  //       .get("/sidebar_data")
  //       .then((sidebarData: any) => {
  //         setSidebarData({
  //           recentPosts: sidebarData.recent_posts,
  //           tags: sidebarData.tags,
  //         });
  //         setIsLoading(false);
  //         const fontSizesArr = generateFontSizes(sidebarData.tags.length);
  //         setFontSizes(fontSizesArr);
  //       })
  //       .finally(() => {
  //         console.log("test");
  //       });
  //   }
  // }, []);

  return (
    <div className="content-sidebar" role="complementary">
      <WidgetView title="Search" isOpen={true}>
        <SearchForm />
      </WidgetView>

      <WidgetView title="Recent Posts">
        {/* <ul> */}
        {/*   {sidebarData.recentPosts.map((post: Content, idx) => { */}
        {/*     return ( */}
        {/*       <li key={idx}> */}
        {/*         <Link href={`/${post.slug}`}>{post.title}</Link> */}
        {/*       </li> */}
        {/*     ); */}
        {/*   })} */}
        {/* </ul> */}
      </WidgetView>

      <WidgetView title="Tags">
        {/* <div className="tagcloud"> */}
        {/*   {sidebarData.tags.map((tag: Tag, idx) => { */}
        {/*     return ( */}
        {/*       <Link */}
        {/*         key={idx} */}
        {/*         href={`/list/${tag.slug}`} */}
        {/*         style={{ fontSize: `${fontSizes[idx]}rem` }} */}
        {/*       > */}
        {/*         {tag.title}{" "} */}
        {/*       </Link> */}
        {/*     ); */}
        {/*   })} */}
        {/* </div> */}
      </WidgetView>
    </div>
  );
};

export default SidebarView;
