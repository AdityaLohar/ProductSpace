import { useEffect, useState } from "react";
import likeOutline from "../assets/like-outline.svg";
import likeFilled from "../assets/like-filled-red.svg";
import comment from "../assets/bx-comment.svg";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authAtom, isOpenLogin, isVisibleLogin } from "../atoms/modalState";

const pic =
  "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg";
const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
const postCommentURL = `${PRODUCT_SPACE_API_HOST}/v1/comment`; // post comment

// Format Date fetched from DB
const getFormattedDate = (createdAt) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};

const Reply = ({ id, username, createdAt, content, likesCount, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start gap-2">
        {/* Profile Photo */}
        <div className="w-[36px]">
          <img src={pic} className="h-8 w-8 rounded-full" alt="" />
        </div>

        {/* Actual Reply */}
        <div className="flex flex-col gap-2 bg-gray-200 w-full p-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-start font-bold">{username}</div>
            <div className="text-end text-[12px] text-gray-400">
              {getFormattedDate(createdAt)}
              {/* Dec 22, 2024 */}
            </div>
          </div>

          <div className="text-[14px]">{content}</div>
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
  blogId,
  content,
  username,
  isLiked,
  likesCount,
  createdAt,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [isReplyInputVisible, setReplyInputVisible] = useState(false);
  const [replies, setReplies] = useState([]);
  const [showReply, setShowReply] = useState(false);
  const setIsLoginVisible = useSetRecoilState(isVisibleLogin);
  const setIsLoginOpen = useSetRecoilState(isOpenLogin);

  const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
  const likeURL = `${PRODUCT_SPACE_API_HOST}/v1/like`;
  const getRepliesURL = `${PRODUCT_SPACE_API_HOST}/v1/comment/search?parentId=${id}&blogId=${blogId}&isPaged=false&page=0&size=1&sort=ASC&matchingAny=false`;

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
      const res = await axios.get(getRepliesURL);
      setReplies(res.data.pageData.content);
      console.log(res.data.pageData.content);
      console.log(isLiked);
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
      handleShowReplies();
      setShowReply(true);
      setReplyInputVisible(!isReplyInputVisible);
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Main Comment */}
      <div className="flex justify-start lg:justify-between items-start gap-2">
        {/* Profile Photo */}
        <div className="w-[36px]">
          <img src={pic} className="h-8 w-8 rounded-full" alt="Profile" />
        </div>

        {/* Actual Comment */}
        <div className="flex flex-col gap-2 bg-gray-200 w-full p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="text-[14px] text-start font-bold">
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
              {/* <p>{likesCount ? likesCount + liked - isLiked : "0"}</p> */}
              <p>
                {likesCount + (liked ? (isLiked ? 0 : 1) : isLiked ? -1 : 0)}
              </p>
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <button onClick={toggleReply}>
                {/* {replies.length == 1 ? "Reply" : "Replies"} */}
                <img src={comment} alt="" className="w-4" />
              </button>
            </div>

            <div>
              <button onClick={handleShowReplies}>
                {showReply ? "Hide" : "Show"} Replies
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
        <div className="ml-8 md:ml-12 flex flex-col gap-2">
          {replies.map((reply) => (
            <Reply
              id={reply.id}
              key={reply.id}
              parentId={reply.parentId}
              username={reply.commentedUser?.username || "Anonymous"} // Default username
              createdAt={reply.createdAt}
              content={reply.content || "No content provided"}
              postReply={postReply}
              likesCount={likesCount}
              isLiked={isLiked}
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
  const PRODUCT_SPACE_API_HOST = import.meta.env.VITE_PRODUCT_SPACE_API;
  const getCommentURL = `${PRODUCT_SPACE_API_HOST}/v1/comment/search?blogId=${id}&isPaged=false&page=0&size=1&sort=ASC&matchingAny=false`;

  const setIsLoginVisible = useSetRecoilState(isVisibleLogin);
  const setIsLoginOpen = useSetRecoilState(isOpenLogin);

  const toggleLogin = () => {
    setIsLoginOpen(true);
    setIsLoginVisible(true);
  };

  const fetchComments = async () => {
    try {
      // Assuming getCommentsURL is the API endpoint to fetch comments
      const response = await axios.get(getCommentURL);
      const data = response.data;
      console.log(data);

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

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
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
      console.log(newComment);

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
      <div className={`font-inter bg-gray-100 shadow-lg h-full`}>
        {/* Comments Content */}
        {isCommentOpen && (
          <div className="flex flex-col gap-8 p-4">
            {/* User inputs */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">
                Responses ({totalComments})
              </h2>

              <div className="flex items-center gap-2 md:gap-2 p-3 md:p-4 border rounded-xl">
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
                  placeholder="What are your thoughts?"
                  className="w-full p-2 md:px-3 border rounded-full outline-none"
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
              {comments.map((comment, _id) => {
                // Check if likes is an array and if the current user has liked this comment
                const isLiked =
                  Array.isArray(comment.likes) &&
                  comment.likes.some(
                    (like) => like.userId === localStorage.getItem("userId")
                  );

                return (
                  <div key={_id}>
                    <Comment
                      id={comment.id}
                      blogId={id}
                      content={comment.content}
                      username={comment.commentedUser?.username || "Anonymous"}
                      isLiked={isLiked}
                      likesCount={comment.likesCount}
                      createdAt={comment.createdAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentSection;
