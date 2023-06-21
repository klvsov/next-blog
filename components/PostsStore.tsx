"use client";

import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import Loader from "./Loader";

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {posts.map((post) => (
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
