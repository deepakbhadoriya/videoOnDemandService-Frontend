import React from 'react';

import VideoHorizontalCardStyle from './VideoHorizontalCard.module.css';

const VideoHorizontalCard = ({
  className,
  video: { title, thumbnailUrl, videoUrl, description },
}) => (
  <div className={className + VideoHorizontalCardStyle.flexRow}>
    <div
      className={VideoHorizontalCardStyle.horizontalVideoImage}
      style={{
        background: `linear-gradient(360deg, rgba(0, 0, 0, 0.6) -10.09%, rgba(0, 0, 0, 0.15) 42.08%), url(${thumbnailUrl})`,
      }}
    />
    <div className={VideoHorizontalCardStyle.textContainer}>
      <p className={VideoHorizontalCardStyle.horizontalVideoTitle}>{title || 'Video Title'}</p>
      <p className={VideoHorizontalCardStyle.horizontalVideoDescription}>
        {description || 'Video Description'}
      </p>
    </div>
    <i className={'fas fa-ellipsis-v ' + VideoHorizontalCardStyle.moreIcon} />
  </div>
);

export default VideoHorizontalCard;
