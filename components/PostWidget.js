import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { getSimilarPosts, getRecentPosts } from "../service";

const PostWidget = ({ slug, categories }) => {
  console.log(categories);
  const [relatedPosts, setrelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setrelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setrelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);
  return (
    <div className="bg-gray shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}{" "}
      </h3>
      {relatedPosts.map((item, key) => (
        <section className="flex items-center w-full mb-4" key={key}>
          <figure className="w-16 flex-none">
            <Image
              alt={item.title}
              width={"60px"}
              height={"60px"}
              unoptimized="true"
              src={item.featureImage.url}
              className="align-mddle rounded-full"
            />
          </figure>
          <figcaption className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(item.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${item.slug}`}
              className="text-md"
              key={key}>
              {item.title}
            </Link>
          </figcaption>
        </section>
      ))}
    </div>
  );
};

export default PostWidget;
