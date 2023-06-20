import { replaceDash, toCapitalize } from "@/helpers";
import { FC } from "react";

interface BlogPostProps {
  params: {
    id: string;
  };
}

const fetchData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return await response.json();
};

export const generateMetadata = async ({ params: { id } }: BlogPostProps) => {
  const post = await fetchData(id);
  return {
    title: `${toCapitalize(post.title)} | Next blog`,
  };
};

const BlogPost: FC<BlogPostProps> = async ({ params }) => {
  const post = await fetchData(params.id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default BlogPost;
