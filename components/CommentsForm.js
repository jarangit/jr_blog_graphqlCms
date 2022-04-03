import React, { useState, useEffect } from "react";
import { submitComment } from "../service";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  function handlePostSubmission() {
    setError(false);

    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      console.log("keeping local");
      console.log({ "this name for keep": name });
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }
    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          (formData.name = ""), (formData.email = "");
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  }

  useEffect(() => {
    setLocalStorage(window.localStorage);
    console.log("call useEefect");
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };

    setFormData(initalFormData);
  }, []);
  console.log(formData);
  return (
    <div className="shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          onChange={onInputChange}
          name="comment"
          placeholder="Your comments"
          id=""
          cols="30"
          rows="10"
          value={formData.comment}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:rign-gray-200 bg-gray-100 text-gray-700"
        />
      </div>

      <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          onChange={onInputChange}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
        <input
          onChange={onInputChange}
          type="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </fieldset>

      <fieldset className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            checked={formData.storeData}
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
          font-medium rounded-full text-white px-8 py-1 cursor-pointer"
          onClick={handlePostSubmission}>
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
