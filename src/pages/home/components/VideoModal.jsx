import React from 'react';

import VideoModalStyle from './VideoModal.module.css';
import SpeakerCard from '../../../components/SpeakerCard';
import VideoHorizontalCard from '../../../components/VideoHorizontalCard';
import getEmbedLink from '../../../utils/getEmbedLink';

const VideoModal = ({ recommendedVideos, selectVideo, onClose }) => {
  return (
    selectVideo && (
      <div className={VideoModalStyle.modalOuterContainer} onClick={onClose}>
        <div
          className={VideoModalStyle.modalInnerContainer}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="m-2" align="right">
            <span onClick={onClose} className={VideoModalStyle.closeButton}>
              CLOSE
            </span>
          </div>
          <iframe
            title="sdf"
            className={VideoModalStyle.videoContainer}
            src={getEmbedLink(selectVideo.videoUrl)}
          />
          <div width="890px">
            <div className="row px-lg-5 px-4 py-4">
              <div className="col-lg-8 col-12">
                <span className={VideoModalStyle.title}>{selectVideo.title}</span>
                {selectVideo.topics.map((topic) => (
                  <button className={VideoModalStyle.topicButton + ' mr-2'}>
                    Topic: {topic.name}
                  </button>
                ))}
                <p className={VideoModalStyle.description}>{selectVideo.description}</p>
              </div>
            </div>
            <div className="row px-lg-5 px-4 py-3">
              <div className="col-lg-8 col-12 subHeading">SPEAKERS</div>
              <div className="col-lg-4 col-0 "></div>
              {selectVideo.speakers.map((speaker, index) => (
                <SpeakerCard
                  className=" col-lg-4 col-sm-6 col-12 mt-3"
                  speaker={speaker}
                  key={index}
                />
              ))}
            </div>
            <div className="row px-lg-5 px-4 py-3">
              <div className="col-lg-8 col-12 subHeading">More Videos</div>
              {recommendedVideos.map((video, index) => (
                <VideoHorizontalCard
                  className="col-lg-8 col-12 mt-4 mb-1 "
                  video={video}
                  key={video._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default VideoModal;
