import React from "react";

const PostCard = ({ posts }) => {
  console.log({ "this postcard": posts });
  const { title, excerpt } = posts.node;
  return (
    <div>
      <strong>{title}</strong>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
