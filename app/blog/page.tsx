import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Next blog",
};

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts");

  return await response.json();
};

const Blog = async () => {
  const posts = await fetchData();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {!!posts?.length &&
          posts.map((post: any) => (
            <li key={post.is}>
              <Link prefetch={false} href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Blog;
