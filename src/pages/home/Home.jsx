import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import HomeStyle from './Home.module.css';
import Header from './components/Header';
import VideoModal from './components/VideoModal';

import videoActions from '../../redux/actions/videoActions';
import speakerActions from '../../redux/actions/speakerActions';
import topicActions from '../../redux/actions/topicActions';

const ButtonSection = ({ buttonArray, title, filter, setFilter }) => (
  <div className="row my-4">
    <div className="col-lg-2 col-12 py-2" align="center">
      <span className={HomeStyle.buttonHeading}>{title}</span>
    </div>
    {buttonArray &&
      buttonArray.slice(0, 5).map((button, index) => (
        <div className="col-lg-2 col-md-4 col-6 mb-3" align="center" key={index}>
          <button
            type="button"
            className={
              filter.find((item) => item._id === button._id)
                ? HomeStyle.categoryButtonActive
                : HomeStyle.categoryButton
            }
            onClick={() => {
              filter.find((item) => item._id === button._id)
                ? setFilter(filter.filter((item) => item._id !== button._id))
                : setFilter([...filter, button]);
            }}
          >
            {button.name}
          </button>
        </div>
      ))}
  </div>
);

const VideoCard = ({ handleClick, video: { title, thumbnailUrl, video } }) => (
  <div
    className={HomeStyle.videoCard}
    style={{
      background: `linear-gradient(360deg, rgba(0, 0, 0, 0.8) -10.09%, rgba(0, 0, 0, 0.1) 42.08%), url(${thumbnailUrl})`,
    }}
    onClick={handleClick}
  >
    <div className={HomeStyle.videoMenu}>
      <img src="/assets/images/videoHamburger.svg" alt="" />
    </div>
    <div className={HomeStyle.videoCardTitle}>{title}</div>
  </div>
);

const Home = () => {
  const dispatch = useDispatch();

  const [selectedVideo, setSelectedVideo] = useState(false);
  const [topicFilter, setTopicFilter] = useState([]);
  const [speakerFilter, setSpeakerFilter] = useState([]);

  const videos = useSelector((state) => state.video.videos);
  const topics = useSelector((state) => state.topic.topics);
  const speakers = useSelector((state) => state.speaker.speakers);

  useEffect(() => {
    dispatch(speakerActions.getSpeakers());
    dispatch(videoActions.getVideos());
    dispatch(topicActions.getTopics());
  }, [dispatch]);

  const filteredVideo = () => {
    const tempVideos = [];
    videos &&
      videos.forEach((vid) => {
        vid.topics.forEach((v) => {
          topicFilter.forEach((item) => item._id === v._id && tempVideos.push(vid));
        });
        vid.speakers.forEach((v) => {
          speakerFilter.forEach((item) => item._id === v._id && tempVideos.push(vid));
        });
      });

    return tempVideos.length > 0 ? [...new Set(tempVideos)] : videos || [];
  };

  return (
    <>
      <Header />
      {/* Button Section */}
      <div className={'container ' + HomeStyle.buttonContainer}>
        <ButtonSection
          buttonArray={topics}
          title="Topics:"
          filter={topicFilter}
          setFilter={setTopicFilter}
        />
        <ButtonSection
          buttonArray={speakers}
          title="Speakers:"
          filter={speakerFilter}
          setFilter={setSpeakerFilter}
        />
      </div>

      {/* Video Section */}
      <div className="container-fluid">
        <div className="row mx-lg-5 mx-md-5 mx-0 px-lg-5 px-0 ">
          <div className="col-12 mt-5 mb-4 px-2">
            <span className={HomeStyle.videoTitle}>Filter Videos</span>
          </div>
          <div className={'px-2 ' + HomeStyle.videoCardContainer}>
            {filteredVideo().map((video, index) => (
              <VideoCard key={index} video={video} handleClick={() => setSelectedVideo(video)} />
            ))}
          </div>
        </div>
        <div className="row mx-lg-5 mx-md-5 mx-0 px-lg-5 px-0 ">
          <div className="col-12 mt-5 mb-4 px-2">
            <span className={HomeStyle.videoTitle}>All Videos</span>
          </div>
          <div className={'px-2 ' + HomeStyle.videoCardContainer}>
            {videos &&
              videos.map((video, index) => (
                <VideoCard key={index} video={video} handleClick={() => setSelectedVideo(video)} />
              ))}
          </div>
        </div>

        <div className="row my-5"></div>
      </div>

      <VideoModal
        recommendedVideos={videos}
        onClose={() => setSelectedVideo(false)}
        selectVideo={selectedVideo}
      />
    </>
  );
};

export default Home;
