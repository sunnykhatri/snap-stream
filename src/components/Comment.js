import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-row py-4">
      <div className="mr-5">
        <img
          src={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          alt="img"
          width="40px"
          height="40px"
          className="rounded-full border-2"
        />
      </div>
      <div className="text-white">
        <p className="pb-1 text-sm">
          {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: comment?.snippet?.topLevelComment?.snippet?.textDisplay,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Comment;
