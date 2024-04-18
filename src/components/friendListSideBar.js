import React from "react";

/**
 * Friend List Side Bar component.
 *
 * @returns {object} Friend List Side Bar component.
 */
const FriendListSideBar = () => {

  return (
    <aside>
      <h2>Friend List</h2>
      <ul>
        <li>
          <a href="/friend1">Friend 1</a>
        </li>
        <li>
          <a href="/friend2">Friend 2</a>
        </li>
        <li>
          <a href="/friend3">Friend 3</a>
        </li>
      </ul>
    </aside>
  );
};

export default FriendListSideBar;