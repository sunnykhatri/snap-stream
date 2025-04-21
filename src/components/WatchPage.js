import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_COMMENT_THREADS_API,
  YOUTUBE_DETAIL_API,
} from "../utils/constants";
import {
  LiaCutSolid,
  LiaDownloadSolid,
  LiaShareSolid,
  LiaThumbsUp,
} from "react-icons/lia";
import { FiBookmark } from "react-icons/fi";
import Comment from "./Comment";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [commentThreads, setCommentThreads] = useState([]);
  const videoId = searchParams.get("v");

  const buttons = [
    { icon: <LiaThumbsUp size={30} className="pr-2" />, label: "24K" },
    { icon: <LiaShareSolid size={30} className="pr-2" />, label: "Share" },
    {
      icon: <LiaDownloadSolid size={30} className="pr-2" />,
      label: "Download",
    },
    { icon: <LiaCutSolid size={30} className="pr-2" />, label: "Clip" },
    { icon: <FiBookmark size={30} className="pr-2" />, label: "Save" },
  ];

  useEffect(() => {
    const getVideoDetails = async () => {
      const data = await fetch(YOUTUBE_DETAIL_API + videoId);
      const json = await data.json();
      setVideoDetails(json?.items[0]);
    };

    const getCommentThreads = async () => {
      const data = await fetch(YOUTUBE_COMMENT_THREADS_API + videoId);
      const json = await data.json();
      //console.log(json?.items);
      setCommentThreads(json?.items);
    };

    dispatch(closeMenu());
    getVideoDetails();
    getCommentThreads();
  }, [dispatch, videoId]);

  if (!videoDetails) return;
  //console.log(videoDetails);
  const { snippet, statistics } = videoDetails ?? [];
  const { channelTitle, title, description } = snippet ?? [];

  return (
    <div className="">
      <div className="grid grid-flow-col">
        <div className="col-span-10">
          <iframe
            width="1300"
            height="600"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="How do cricketers learn English? | Fluenzio | Vineeta Chaudhary"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="pt-2">
            <div className="text-white">
              <h1 className="font-bold text-xl">{title}</h1>
              <div className="flex flex-row justify-between items-center">
                <p>{channelTitle}</p>
                <div className="flex flex-row">
                  {buttons.map((btn, index) => (
                    <button
                      key={index}
                      className="text-white ml-2 px-5 py-1 rounded-full text-sm bg-slate-900 flex items-center"
                    >
                      {btn.icon}
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-white w-100 bg-slate-800 px-3 py-2 mt-5 rounded-lg whitespace-pre-line">
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>
            <div className="py-5">
              <div className="text-white text-lg py-3">
                {statistics?.commentCount} Comments
              </div>
              {commentThreads.map((comment) => {
                const replies = comment?.replies;
                return (
                  <>
                    <Comment comment={comment} />
                    {comment?.snippet?.totalReplyCount > 0 && (
                      <div className="text-red-700 mr-5 pt-5">
                        {replies && replies.comments.map((reply) => {
                            return (<Comment comment={reply} />);
                        })}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default WatchPage;
