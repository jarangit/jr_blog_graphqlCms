import moment from "moment";
import Link from "next/link";
import React from "react";

const PostCard = ({ posts }) => {
  console.log({ "this postcard": posts });
  const { title, excerpt, featureImage, slug, author, createdAt } =
    posts.node;
  return (
    <div className="bg-gray shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <figure className="elative overflow-hidden pb-10 mb-6">
        <img
          src={featureImage.url}
          alt=""
          className="object-top  h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </figure>

      <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${slug}`}>{title}</Link>
      </h1>

      <section className="block lg:flex items-center justify-center mb-8 w-full text-center">
        <figur className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <img
            unoptimized
            // loader={grpahCMSImageLoader}
            alt={author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={author.photo.url}
          />
          <figcaption className="inline align-middle text-gray-700 ml-2 fontmedium text-lg">
            {author.name}
          </figcaption>
        </figur>

        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </section>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {excerpt}
      </p>
    </div>
  );
};

export default PostCard;
