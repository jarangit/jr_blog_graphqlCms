import React from "react";

const Authoe = ({ author }) => {
  console.log({ "this author": author });
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <figure className="absolute left-0 right-0 -top-14">
        <img
          src={author.photo.url}
          alt=""
          className="align-middle rounded-full"
          height="100px"
          width="100px"
        />
      </figure>
      <figcaption>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">
          {author.name}
        </h3>
        <p className="text-white text-ls">{author.bio}</p>
      </figcaption>
    </div>
  );
};

export default Authoe;
