import React, { useEffect, useState } from "react";
import Header from "../Home/components/Header";
import { ArrowLeft } from "lucide-react";
import { Info } from "lucide-react";
import { Send } from "lucide-react";
import { db } from "../../../utils/drizzle";
import { Ideas } from "../../../utils/schema";
import moment from "moment";
import { Navigate, useNavigate } from "react-router-dom/dist";

const AddNewScreen = () => {
  const navigation = useNavigate();
  const [idea, setIdea] = useState();
  const [username, setUsername] = useState("@");
  const [showAlert, setShowAlert] = useState(false);
  const [existingUser, setExistingUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      setExistingUser(true);
    }
  }, [username, setUsername]);

  const onSaveHandler = async () => {
    const result = await db
      .insert(Ideas)
      .values({
        content: idea,
        username: username,
        createdAt: moment().calendar(),
      })
      .returning({ id: Ideas.id });

    if (result) {
      localStorage.setItem("username", username);
      console.log("Data saved");
      setIdea("");
      // setExistingUser(true);

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <div>
      <Header />
      {showAlert && (
        <div role="alert" className="alert alert-success mt-8 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6  animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-medium">New Idea added successfully!</span>
        </div>
      )}
      <h2 className="font-bold text-2xl mt-12 text-center">
        From Concept to Creation : Empowering your startup journey.
      </h2>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigation("/");
          }}
          className="btn btn-primary mt-7 w-24"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      <div className=" flex flex-col gap-2">
        <label>
          Your Idea <span className="text-red-700">*</span>
        </label>
        <textarea
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value);
          }}
          className="mt-2 textarea textarea-primary h-32 text-lg"
          placeholder="Write down your idea here..."
        ></textarea>
      </div>

      {!existingUser && (
        <div className="">
          <label className="mt-6 flex items-center justify-between">
            Your Username:
            <span className="flex items-center justify-center gap-2">
              <Info size={16} />
              No Account Required
            </span>
          </label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Type here"
            className="mt-4 input input-bordered input-primary w-full max-w-full text-lg"
          />
        </div>
      )}
      <button
        onClick={() => {
          onSaveHandler();
        }}
        className="btn btn-primary mt-8 w-full"
        disabled={!(idea && username)}
      >
        Send
        <Send size={16} />
      </button>
    </div>
  );
};

export default AddNewScreen;
