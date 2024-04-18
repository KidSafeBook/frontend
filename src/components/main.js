import React from "react";
import PostList from "./postList.js";

/**
 * Main component.
 * 
 * @returns {*} - JSX component.
 */
const Main = () => {
  return (
    <main className="mx-5">
      <PostList />
    </main>
  );
};

export default Main;
