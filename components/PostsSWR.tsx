"use client";
import useSWR from "swr";
import Link from "next/link";
import Loader from "./Loader";
import { getAllPosts } from "@/services/getPosts";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link prefetch={false} href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
