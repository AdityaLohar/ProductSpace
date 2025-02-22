import { useEffect, useState } from "react";
import likeOutline from "../assets/like-outline.svg";
import likeFilled from "../assets/like-filled-red.svg";
import comment from "../assets/comment.svg";
import axios from "axios";
import avatars from "../data/Avatars";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  authAtom,
  isOpenLogin,
  isVisibleLogin,
  totalCommentsAtom,
} from "../atoms/modalState";

const pic =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";
const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
const postCommentURL = `${PRODUCT_SPACE_API_HOST}/v1/comment`; // post comment

const colors = [
  "#0D49C3",
  "#1C99B8",
  "#1B7850",
  "#FB8B18",
  "#DE3112",
  "#4939A2",
  "#142546",
];

// Format Date fetched from DB
const getFormattedDate = (createdAt) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};

const Reply = ({
  id,
  username,
  createdAt,
  content,
  likesCount,
  isLiked,
  createdBy,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const setIsLoginVisible = useSetRecoilState(isVisibleLogin);
  const setIsLoginOpen = useSetRecoilState(isOpenLogin);
  const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
  const likeURL = `${PRODUCT_SPACE_API_HOST}/v1/like`;
  const pic =
    username.split(" ").length > 1
      ? username.split(" ")[0][0] + username.split(" ")[1][0]
      : username.split(" ")[0][0] + username.split(" ")[0][1];
  const profileBg = colors[createdBy % colors.length];

  const toggleLike = async () => {
    const jwtToken = localStorage.getItem("token");

    try {
      if (!liked) {
        // Like the comment
        const res = await fetch(likeURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: jwtToken,
          },
          body: JSON.stringify({ commentId: id }),
        });

        if (res.status === 401) {
          setIsLoginOpen(true);
          setIsLoginVisible(true);
          return;
        } else if (res.status == "FAILURE") {
          alert("Operation failed, something went wrong");
          return;
        }

        setLiked(true); // Update state to reflect liking the comment
      } else {
        // Unlike the comment
        const res = await fetch(likeURL, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: jwtToken,
          },
          body: JSON.stringify([{ commentId: id }]), // Correct array format for backend
        });

        if (res.status === 401) {
          setIsLoginOpen(true);
          setIsLoginVisible(true);
          return;
        } else if (res.status == "FAILURE") {
          alert("Operation failed, something went wrong");
          return;
        }

        setLiked(false); // Update state to reflect unliking the comment
      }
    } catch (err) {
      console.log("Error in liking the comment:", err);
    }
  };

  useEffect(() => {
    console.log(profileBg);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start gap-2">
        {/* Profile Photo */}
        <div
          className={`w-[36px] flex-shrink-0 aspect-square text-white rounded-full flex justify-center items-center text-[13px] font-bold`}
          style={{ backgroundColor: profileBg }}
        >
          {pic.toUpperCase()}
        </div>

        {/* Actual Reply */}
        {/* <div className="flex flex-col gap-2 bg-gray-200 w-full p-3 rounded-lg"> */}
        <div
          className="flex flex-col gap-2 bg-[#EFF2FC] w-full p-3 rounded-lg"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-start font-bold">{username}</div>
            <div className="text-end text-[12px] text-gray-400">
              {getFormattedDate(createdAt)}
              {/* Dec 22, 2024 */}
            </div>
          </div>

          <div className="text-[14px]">{content}</div>

          <div
            className={`text-[12px] flex justify-end items-center gap-1 ${
              liked ? "text-red-400" : "text-gray-400"
            }`}
          >
            <button onClick={toggleLike}>
              <img
                src={liked ? likeFilled : likeOutline}
                alt=""
                className="h-3"
              />
            </button>
            {/* <p>{likesCount ? likesCount + liked - isLiked : "0"}</p> */}
            <p>
              {likesCount + (liked ? (isLiked ? 0 : 1) : isLiked ? -1 : 0) ||
                ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReplyInput = ({ postReply }) => {
  const [reply, setReply] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (reply.trim() === "") return;
    postReply(reply);
    setReply("");
  };

  return (
    <div className="flex flex-row items-center gap-2 text-[14px] bg-[#F3F3F3] p-2 rounded-full">
      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Write your reply..."
        className="flex-1 rounded-xl px-1 outline-none w-full bg-[#F3F3F3] placeholder-[#565973]"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#107BEF] rounded-full text-white p-2 px-4"
      >
        Post
      </button>
    </div>
  );
};

const Comment = ({
  id,
  blogId,
  content,
  username,
  isLiked,
  likesCount,
  createdAt,
  createdBy,
  repliesCount: initialRepliesCount,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [isReplyInputVisible, setReplyInputVisible] = useState(false);
  const [replies, setReplies] = useState([]);
  const [showReply, setShowReply] = useState(false);
  const [localRepliesCount, setLocalRepliesCount] =
    useState(initialRepliesCount);
  const setIsLoginVisible = useSetRecoilState(isVisibleLogin);
  const setIsLoginOpen = useSetRecoilState(isOpenLogin);

  const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
  const likeURL = `${PRODUCT_SPACE_API_HOST}/v1/like`;
  const getRepliesURL = `${PRODUCT_SPACE_API_HOST}/v1/comment/search?parentId=${id}&blogId=${blogId}&isPaged=false&page=0&size=1&sort=ASC&matchingAny=false`;
  const pic =
    username.split(" ").length > 1
      ? username.split(" ")[0][0] + username.split(" ")[1][0]
      : username.split(" ")[0][0] + username.split(" ")[0][1];
  const profileBg = colors[createdBy % colors.length];

  useEffect(() => {
    setLocalRepliesCount(initialRepliesCount);
  }, [initialRepliesCount]);

  const toggleLike = async () => {
    const jwtToken = localStorage.getItem("token");

    try {
      if (!liked) {
        // Like the comment
        const res = await fetch(likeURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: jwtToken,
          },
          body: JSON.stringify({ commentId: id }),
        });

        if (res.status === 401) {
          setIsLoginOpen(true);
          setIsLoginVisible(true);
          return;
        } else if (res.status == "FAILURE") {
          alert("Operation failed, something went wrong");
          return;
        }

        setLiked(true); // Update state to reflect liking the comment
      } else {
        // Unlike the comment
        const res = await fetch(likeURL, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: jwtToken,
          },
          body: JSON.stringify([{ commentId: id }]), // Correct array format for backend
        });

        if (res.status === 401) {
          setIsLoginOpen(true);
          setIsLoginVisible(true);
          return;
        } else if (res.status == "FAILURE") {
          alert("Operation failed, something went wrong");
          return;
        }

        setLiked(false); // Update state to reflect unliking the comment
      }
    } catch (err) {
      console.log("Error in liking the comment:", err);
    }
  };

  const toggleReply = () => {
    // console.log("clicked");
    setReplyInputVisible(!isReplyInputVisible);
  };

  const handleShowReplies = async () => {
    try {
      const res = await axios.get(getRepliesURL, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setReplies(res.data.pageData.content);
      // console.log(res.data.pageData.content);
      // console.log(isLiked);
      setShowReply(!showReply);
    } catch (err) {
      console.log("error in getting replies");
    }
  };

  const postReply = async (reply) => {
    const payload = {
      content: reply,
      authorId: localStorage.getItem("userId"),
      blogId,
      parentId: id,
    };
    const jwtToken = localStorage.getItem("token");

    try {
      const response = await fetch(postCommentURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the correct content type
          token: jwtToken,
        },
        body: JSON.stringify(payload), // Convert the payload to JSON
      });

      if (response.status == 401) {
        // alert("Redirecting to login");
        setIsLoginOpen(true);
        setIsLoginVisible(true);
      } else if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const newReply = await response.json();
      setLocalRepliesCount((prevCount) => prevCount + 1);
      handleShowReplies();
      setShowReply(true);
      setReplyInputVisible(!isReplyInputVisible);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Comment */}
      <div className="flex justify-start lg:justify-between items-start gap-2 break-words">
        {/* Profile Photo */}
        <div
          className={`w-[36px] aspect-square text-white flex-shrink-0 rounded-full flex justify-center items-center text-[13px] font-bold`}
          style={{ backgroundColor: profileBg }}
        >
          {pic.toUpperCase()}
        </div>

        {/* Actual Comment */}
        {/* <div className="flex flex-col gap-2 bg-gray-200 w-full p-4 rounded-lg"> */}
        <div
          className="flex flex-col gap-2 bg-[#EFF2FC] w-full p-4 rounded-lg break-words"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-start font-bold">
              {username || "anonymous"}
            </div>
            <div className="text-end text-[12px] text-gray-400">
              {getFormattedDate(createdAt)}
            </div>
          </div>

          <div className="text-[14px] text-[#0B0F19]">{content}</div>

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
              {/* <p>{likesCount ? likesCount + liked - isLiked : "0"}</p> */}
              <p>
                {likesCount + (liked ? (isLiked ? 0 : 1) : isLiked ? -1 : 0) ||
                  ""}
              </p>
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              {!showReply ? (
                <button
                  onClick={localRepliesCount === 0 ? null : handleShowReplies}
                  className={`${
                    localRepliesCount === 0 ? "disabled cursor-not-allowed" : ""
                  } flex items-end gap-1`}
                >
                  <img src={comment} alt="" className="w-4" />
                  <p>{localRepliesCount || ""}</p>
                </button>
              ) : (
                <button
                  onClick={handleShowReplies}
                  className="flex items-end gap-1"
                >
                  <p>Hide replies</p>
                </button>
              )}
            </div>

            <div>
              <button onClick={toggleReply}>
                {/* {showReply ? "Hide" : "Show"} Replies */}
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>

      {isReplyInputVisible && (
        <div className="ml-8 md:ml-10">
          <ReplyInput postReply={postReply} />
        </div>
      )}

      {showReply && (
        <div className="ml-10 pl-2 flex flex-col gap-5 border-l-2">
          {replies.map((reply) => (
            <Reply
              id={reply.id}
              key={reply.id}
              parentId={reply.parentId}
              username={reply.commentedUser?.username || "Anonymous"} // Default username
              createdAt={reply.createdAt}
              createdBy={reply.createdBy}
              content={reply.content || "No content provided"}
              postReply={postReply}
              likesCount={reply.likesCount}
              isLiked={reply.isLiked}
            />
          ))}
        </div>
      )}
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
  const setUniversalTotalComments = useSetRecoilState(totalCommentsAtom);
  const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
  const getCommentURL = `${PRODUCT_SPACE_API_HOST}/v1/comment/search?blogId=${id}&isPaged=false&page=0&size=1&sort=ASC&matchingAny=false`;
  const username = localStorage.getItem("username");
  const pic = username
    ? username.split(" ").length > 1
      ? username.split(" ")[0][0] + username.split(" ")[1][0]
      : username.split(" ")[0][0] + username.split(" ")[0][1]
    : "";
  const profileBg = colors[localStorage.getItem("userId") % colors.length];

  const setIsLoginVisible = useSetRecoilState(isVisibleLogin);
  const setIsLoginOpen = useSetRecoilState(isOpenLogin);

  const toggleLogin = () => {
    setIsLoginOpen(true);
    setIsLoginVisible(true);
  };

  const fetchComments = async () => {
    const jwtToken = localStorage.getItem("token");

    try {
      // Assuming getCommentsURL is the API endpoint to fetch comments
      const response = await axios.get(getCommentURL, {
        headers: {
          token: jwtToken,
        },
      });
      // console.log("sending token also", jwtToken);

      const data = response.data;
      // console.log(data);

      const commentsData = data.pageData.content;

      // Filter out main comments (those without a parentId) and with the given blogId
      const mainComments = commentsData.filter(
        (comment) => !comment.parentId && comment.blogId == id
      );

      // Update the totalComments state with the count of filtered main comments
      setTotalComments(mainComments.length);

      // Set only filtered main comments in state
      setComments(mainComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  useEffect(() => {
    setUniversalTotalComments(comments.length);
  }, [comments]);

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const postComment = async () => {
    const payload = {
      content: commentInput,
      authorId: localStorage.getItem("userId"),
      blogId: id,
    };

    const jwtToken = localStorage.getItem("token");

    try {
      const response = await fetch(postCommentURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the correct content type
          token: jwtToken,
        },
        body: JSON.stringify(payload), // Convert the payload to JSON
      });

      if (response.status == 401) {
        // alert("Redirecting to login");
        // login popup
        toggleLogin();
      } else if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const newComment = await response.json();
      // console.log(newComment);

      // Update the state with the new comment
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentInput("");
      fetchComments();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      postComment();
    }
  };

  return (
    <>
      {/* Comment Section */}
      <div
        className={`fixed font-inter flex pt-0 lg:pt-4 z-30 top-0 right-0 h-[calc(100vh)] bg-white shadow-[0px_4px_10px_6px_rgba(0,0,0,0.2)] lg:shadow-lg z-10 overflow-scroll transition-transform duration-700 ease-in-out rounded-t-2xl lg:rounded-t-sm ${
          isCommentOpen
            ? "translate-y-[15%] lg:translate-y-0 lg:translate-x-0 w-full lg:w-[350px]"
            : "translate-y-full w-full lg:translate-y-0 lg:translate-x-full lg:w-[350px]"
        }`}
      >
        {/* Comments Content */}
        <div
          className={`flex w-full flex-col gap-8 p-4 transition-opacity duration-1000 ${
            isCommentOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* User inputs */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Responses ({totalComments})
              </h2>

              <button className="text-2xl" onClick={toggleCommentSidebar}>
                ×
              </button>
            </div>

            {localStorage.getItem("token") && pic !== "" ? (
              <div className="flex flex-col items-start gap-2 md:gap-2 p-3 md:p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="rounded-full p-[2px] border-2 border-blue-600">
                    <div
                      className={`w-[36px] aspect-square rounded-full border-1 border-white p-[4px] text-white flex justify-center items-center text-[13px] font-bold`}
                      style={{ backgroundColor: profileBg }}
                    >
                      {pic.toUpperCase()}
                    </div>
                  </div>
                  <div className="font-bold">
                    {localStorage.getItem("username")}
                  </div>
                </div>
                <textarea
                  value={commentInput}
                  onChange={handleCommentChange}
                  onKeyUp={handleKeyPress}
                  type="text"
                  placeholder="What are your thoughts?"
                  className="min-h-[100px] w-full p-2 md:px-3 rounded-lg outline-none bg-[#F3F3F3] placeholder-[#565973]"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-2 p-3 md:p-4 rounded-xl">
                <textarea
                  value={commentInput}
                  onChange={handleCommentChange}
                  onKeyUp={handleKeyPress}
                  type="text"
                  placeholder="What are your thoughts?"
                  className="min-h-[100px] w-full p-2 md:px-3 border rounded-lg outline-none bg-[#F3F3F3] placeholder-[#565973]"
                />
              </div>
            )}

            {/* {commentInput !== "" ? (
                <div className="flex justify-end">
                  <button
                    className="bg-[#107BEF] text-[14px] rounded-full text-white p-2 px-4"
                    onClick={postComment}
                  >
                    Post
                  </button>
                </div>
              ) : (
                ""
              )} */}
            <div className="flex justify-end">
              <button
                className={`bg-[#107BEF] text-[14px] rounded-full text-white p-2 px-4 ${
                  commentInput == "" ? "opacity-50" : ""
                }`}
                onClick={postComment}
                disabled={commentInput == ""}
              >
                Post
              </button>
            </div>
          </div>

          <hr className="border-1" />

          <div className="flex justify-between">
            <div>All Responses ({totalComments})</div>
            {/* <div className="">Most relevant</div> */}
          </div>

          {/* Scrollable Responses Section */}
          <div className="flex flex-col gap-5 pb-[70%] lg:pb-8">
            {comments.map((comment, _id) => {
              return (
                <div key={_id}>
                  <Comment
                    id={comment.id}
                    blogId={id}
                    content={comment.content}
                    username={comment.commentedUser?.username || "Anonymous"}
                    isLiked={comment.isLiked}
                    likesCount={comment.likesCount}
                    repliesCount={comment.repliesCount}
                    createdAt={comment.createdAt}
                    createdBy={comment.createdBy}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      {/* <button
        onClick={toggleCommentSidebar}
        className={`fixed ${
          topbar ? "top-[114px]" : "top-[72px]"
        } right-4 bg-blue-600 text-white rounded-full p-2 px-3 shadow-md z-50 focus:outline-none`}
      >
        💬
      </button> */}
    </>
  );
};

export default CommentSection;
