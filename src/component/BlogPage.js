import React from "react";
import Post from "./Post";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);

  return (
    <div>
      <h1>Blog</h1>
      {/*Example of propdrilling with context, should only be used when every component inside this component access the context*/}
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin}></Post>
    </div>
  );
}
