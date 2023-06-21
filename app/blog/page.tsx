// import Posts from "@/components/PostsStore";
import Posts from "@/components/PostsSWR";
import SearchBar from "@/components/SearchBarSWR";
// import SearchBar from "@/components/SearchBarStore";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next blog",
};

const Blog = async () => {
  return (
    <>
      <h1>Blog page</h1>
      <SearchBar />
      <Posts />
    </>
  );
};

export default Blog;
