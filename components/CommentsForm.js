import React, { useState, useEffect } from "react";

const CommentsForm = () => {
  const [error, setError] = useState(true);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });
  return (
    <div className="shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:rign-gray-200 bg-gray-100 text-gray-700"
        />
      </div>

      <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          name="name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </fieldset>
      <fieldset className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData">
            Save my name, email in this browser for the next time I
            comment.
          </label>
        </div>
      </fieldset>
      {error && (
        <p className="text-xs text-red-500">
          All fields are mandatory
        </p>
      )}

      <section className="mt-8">
        <button
          type="button"
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600
          text-lg
          font-medium rounded-full text-white px-8 py-1 cursor-pointer">
          Post Cemment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semiblod mt-3 text-green-500">
            Comment submited for review
          </span>
        )}
      </section>
    </div>
  );
};

export default CommentsForm;
