import { useEffect, useState } from "react";
import comment1 from "../data/Comments1";
import likeOutline from "../assets/like-outline.svg";
import likeFilled from "../assets/like-filled-red.svg";
import axios from "axios";

let demo = {
  id: 2,
  content: "",
  author: {
    id: 1,
    email: "loggedInUser@gmail.com",
    password: "$2a$10$Wla81U3ZU43mQGTyI93edum2zjHVeZEEb5hCPmBhlLJ9X0I7xClje",
    username: "loggedInUser",
    mobile: "8454090241",
    createdOn: "2024-12-20T13:24:03.000+0530",
    updatedOn: "2024-12-20T13:24:04.000+0530",
  },
  replies: [],
  likesCount: 0,
  likes: [],
  createdAt: "2024-12-20T09:44:07.000+0000",
  updatedAt: "2024-12-20T09:44:07.000+0000",
  isEdited: false,
  isDeleted: false,
};

let demoReply = {
  id: 101,
  content: "",
  author: {
    id: 2,
    email: "replyuser@gmail.com",
    username: "replyuser",
  },
  createdAt: "2024-12-20T12:00:00.000+0000",
  updatedAt: "2024-12-20T12:00:00.000+0000",
  isEdited: false,
  isDeleted: false,
};

const pic =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";

const blog1 = comment1;
const postCommentURL = "http://localhost:8081/v1/comment"; // post comment

// Format Date fetched from DB
const getFormattedDate = (createdAt) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};

const Reply = ({ parentId, username, createdAt, content, postReply }) => {
  const [liked, setLiked] = useState(false);
  const [isReplyInputVisible, setReplyInputVisible] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleReply = () => {
    setReplyInputVisible(!isReplyInputVisible);
  };

  const handleSubmitReply = (reply) => {
    postReply(parentId, reply);
    setReplyInputVisible(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start gap-2">
        {/* Profile Photo */}
        <div>
          <img
            src={pic}
            className="h-6 md:h-8 w-6 md:w-8 rounded-full"
            alt=""
          />
        </div>

        {/* Actual Reply */}
        <div className="flex flex-col gap-2 bg-gray-200 w-52 md:w-72 p-2 md:p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-start font-bold">{username}</div>
            <div className="text-end text-[12px] text-gray-400">
              {getFormattedDate(createdAt)}
              {/* Dec 22, 2024 */}
            </div>
          </div>

          <div className="text-[14px]">{content}</div>

          <div className="flex gap-2 md:gap-3 justify-end text-gray-400 text-[12px]">
            {/* <div
              className={`flex ${
                liked ? "text-red-400 font-bold" : "text-gray-400"
              } items-center gap-1`}
            >
              <button onClick={toggleLike}>Like</button>
              <p>{2}</p>
            </div>
             */}

            <div className="flex items-center gap-1 text-gray-400">
              <button onClick={toggleReply} className="">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>

      {isReplyInputVisible && <ReplyInput onSubmit={handleSubmitReply} />}
    </div>
  );
};

const ReplyInput = ({ onSubmit }) => {
  const [reply, setReply] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (reply.trim() === "") return;
    onSubmit(reply);
    setReply("");
  };

  return (
    <div className="flex flex-row items-center gap-2 text-[14px]">
      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Write your reply..."
        className="flex-1 p-2 border rounded-lg outline-none w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-2 rounded-lg"
      >
        Post
      </button>
    </div>
  );
};

const Comment = ({
  id,
  content,
  username,
  replies,
  likesCount,
  createdAt,
  setComments,
  comments,
  postReply,
}) => {
  const [liked, setLiked] = useState(false);
  const [isReplyInputVisible, setReplyInputVisible] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleReply = () => {
    console.log("clicked");
    setReplyInputVisible(!isReplyInputVisible);
  };

  const handleSubmitReply = (reply) => {
    postReply(id, reply);
    setReplyInputVisible(!isReplyInputVisible);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Main Comment */}
      <div className="flex justify-between items-start gap-2">
        {/* Profile Photo */}
        <div>
          <img
            src={pic}
            className="h-6 md:h-8 w-6 md:w-8 rounded-full"
            alt="Profile"
          />
        </div>

        {/* Actual Comment */}
        <div className="flex flex-col gap-2 bg-gray-200 w-60 md:w-[328px] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-start font-bold">
              {username || "anonymous"}
            </div>
            <div className="text-end text-[12px] text-gray-400">
              {getFormattedDate(createdAt)}
            </div>
          </div>

          <div className="text-[14px]">{content}</div>

          <div className="flex gap-3 justify-end text-gray-400 text-[12px]">
            <div
              className={`flex items-center gap-1 ${
                liked ? "text-red-400 font-bold" : "text-gray-400"
              }`}
            >
              <button onClick={toggleLike}>
                <img
                  src={liked ? likeFilled : likeOutline}
                  alt=""
                  className="h-3"
                />
              </button>
              <p>{likesCount + liked}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <button onClick={toggleReply}>
                {/* {replies.length == 1 ? "Reply" : "Replies"} */}
                Reply
              </button>
              <p>{2}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-8 md:ml-12 flex flex-col gap-2">
        {isReplyInputVisible && <ReplyInput onSubmit={handleSubmitReply} />}
      </div>
    </div>
  );
};

const CommentSection = ({
  id,
  title,
  isCommentOpen,
  toggleCommentSidebar,
  topbar,
}) => {
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  // const getCommentURL = `http://localhost:8081/v1/comment/search?blogId=${id}&isPaged=true&page=0&size=1&sort=ASC&matchingAny=true`;
  const getCommentURL = `http://localhost:8081/v1/comment`;

  const fetchComments = async () => {
    try {
      // Assuming getCommentsURL is the API endpoint to fetch comments
      const response = await fetch(getCommentURL);
      const data = await response.json();
      console.log(data);

      const commentsData = data.objectList;

      const mainComments = [];
      const replies = [];

      // Segregate main comments and replies
      commentsData.forEach((comment) => {
        if (comment.parentId) {
          replies.push(comment); // It's a reply
        } else {
          mainComments.push({ ...comment, replies: [] }); // It's a main comment
        }
      });

      // Now, associate replies with their parent comments
      mainComments.forEach((mainComment) => {
        mainComment.replies = replies.filter(
          (reply) => reply.parentId === mainComment.id
        );
      });

      // Update the totalComments state
      setTotalComments(mainComments.length + replies.length);

      // Set the processed comments in state
      setComments(mainComments);
      console.log(mainComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       // Assuming getCommentsURL is the API endpoint to fetch comments
  //       const response = await fetch(getCommentURL);
  //       const data = await response.json();
  //       console.log(data);

  //       // Check if data has the pageData and content structure
  //       if (data && data.pageData && Array.isArray(data.pageData.content)) {
  //         const commentsData = data.pageData.content;

  //         const mainComments = [];
  //         const replies = [];

  //         // Segregate main comments and replies
  //         commentsData.forEach((comment) => {
  //           if (comment.parentId) {
  //             replies.push(comment); // It's a reply
  //           } else {
  //             mainComments.push({ ...comment, replies: [] }); // It's a main comment
  //           }
  //         });

  //         // Now, associate replies with their parent comments
  //         mainComments.forEach((mainComment) => {
  //           mainComment.replies = replies.filter(
  //             (reply) => reply.parentId === mainComment.id
  //           );
  //         });

  //         // Set the processed comments in state
  //         setComments(mainComments);
  //       }
  //       else {
  //         console.error("Invalid comment data:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching comments:", error);
  //     }
  //   };

  //   fetchComments();
  // }, [id]);

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  // Working properly
  const postComment = async () => {
    const payload = {
      content: commentInput,
      author: {
        id: 1, // Replace with the actual logged-in user ID
      },
      blogId: id,
    };

    try {
      const response = await fetch(postCommentURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the correct content type
        },
        body: JSON.stringify(payload), // Convert the payload to JSON
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const newComment = await response.json();
      console.log(newComment);

      // Update the state with the new comment
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentInput("");
      fetchComments();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const postReply = async (parentId, reply) => {
    const payload = {
      content: reply,
      author: {
        id: 1, // Replace with the actual logged-in user ID
      },
      blogId: id,
      parentId,
    };

    // Optimistic reply with default values
    const optimisticReply = {
      id: Date.now(), // Temporary ID until server response
      parentId,
      content: reply,
      author: { username: "You" }, // Replace "You" with logged-in user's username
      createdAt: new Date().toISOString(),
    };

    try {
      // Optimistically update state
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === parentId
            ? { ...comment, replies: [...comment.replies, optimisticReply] }
            : comment
        )
      );

      // Send the request to the server
      const response = await fetch(postCommentURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const newReply = await response.json();
      console.log(newReply);

      // Update the state with the real reply from the server
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === optimisticReply.id ? newReply : reply
                ),
              }
            : comment
        )
      );

      fetchComments();
    } catch (error) {
      console.error("Error posting reply:", error);

      // Rollback optimistic update in case of an error
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply.id !== optimisticReply.id
                ),
              }
            : comment
        )
      );
    }
  };

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      postComment();
    }
  };

  return (
    <>
      {/* Comment Section */}
      <div
        className={`fixed font-inter ${
          topbar ? "top-[102px]" : "top-[61px]"
        } right-0 h-[calc(100vh-3rem)] bg-gray-100 shadow-lg z-50 overflow-hidden transition-transform duration-300 ${
          isCommentOpen
            ? "translate-x-0 w-[300px] md:w-[400px]"
            : "translate-x-full w-[300px] md:w-[400px]"
        }`}
      >
        {/* Comments Content */}
        {isCommentOpen && (
          <div className="flex flex-col gap-8 p-4">
            {/* User inputs */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">
                Responses ({totalComments})
              </h2>

              <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 border rounded-xl">
                <img
                  src={pic}
                  alt="profile"
                  className="h-10 md:h-12 w-10 md:w-12 rounded-full border-2 border-blue-600 p-[2px]"
                />
                <input
                  value={commentInput}
                  onChange={handleCommentChange}
                  onKeyUp={handleKeyPress}
                  type="text"
                  placeholder="Ask a question or start a post"
                  className="w-full p-2 md:px-4 border rounded-full outline-none"
                />
              </div>

              {commentInput !== "" ? (
                <div className="flex">
                  <button
                    className="bg-blue-700 p-2 px-4 rounded-lg text-white"
                    onClick={postComment}
                  >
                    Post
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            <hr />

            <div className="flex justify-between">
              <div>All Responses ({totalComments})</div>
              {/* <div className="">Most relevant</div> */}
            </div>

            {/* Scrollable Responses Section */}
            <div className="flex flex-col gap-2 mb-20 overflow-y-scroll pb-16 max-h-[calc(100vh-20rem)]">
              {comments.map((comment) => (
                <div key={comment.id}>
                  <Comment
                    id={comment.id}
                    content={comment.content}
                    username={comment.author?.username || "Anonymous"}
                    likes={comment.likes}
                    likesCount={comment.likesCount}
                    createdAt={comment.createdAt}
                    setComments={setComments}
                    comments={comments}
                    postReply={postReply}
                  />

                  {comment.replies?.length > 0 && (
                    <div className="replies">
                      {comment.replies.map((reply) => (
                        <Reply
                          key={reply.id}
                          parentId={reply.parentId}
                          username={reply.author?.username || "Anonymous"} // Default username
                          createdAt={reply.createdAt}
                          content={reply.content || "No content provided"}
                          postReply={postReply}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleCommentSidebar}
        className={`fixed ${
          topbar ? "top-[114px]" : "top-[72px]"
        } right-4 bg-blue-600 text-white rounded-full p-2 px-3 shadow-md z-50 focus:outline-none`}
      >
        💬
      </button>
    </>
  );
};

export default CommentSection;
