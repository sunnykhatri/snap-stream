const VideoCard = ({ info }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="block m-2 p-2 w-80 cursor-pointer">
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="text-white flex flex-col pt-2">
        <li className="text-base pb-2">{title}</li>
        <li className="text-sm text-slate-600">{channelTitle}</li>
        <li className="text-sm text-slate-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
