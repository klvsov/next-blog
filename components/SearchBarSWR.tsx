"use client";

import { FormEventHandler, useRef } from "react";
import useSWR from "swr";
import { getPostsBySearch } from "@/services/getPosts";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate } = useSWR("posts");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await getPostsBySearch(inputRef.current?.value as string);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="search" placeholder="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
