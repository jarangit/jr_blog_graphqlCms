import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../service";

const Comments = ({ slug }) => {
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => {
      setcomments(res);
    });
  }, [slug]);

  console.log(comments);
  return (
    <div>
      {comments.length !== 0 && (
        <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((item, key) => (
            <div
              key={key}
              className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold"> {item.name} </span>
                on
                {moment(item.createdAt).format("MM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w0full">
                {parse(item.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
