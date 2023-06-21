"use client";

import { usePosts } from "@/store";
import { FormEventHandler, useRef } from "react";
import { shallow } from "zustand/shallow";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getPostsBySearch = usePosts((state) => state.getPostsBySearch, shallow);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    getPostsBySearch(inputRef.current?.value as string);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="search" placeholder="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
