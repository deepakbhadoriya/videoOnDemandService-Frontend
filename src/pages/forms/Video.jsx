import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Style from './Style.module.css';
import TopBarMenu from '../../components/TopBarMenu';
import VideoHorizontalCard from '../../components/VideoHorizontalCard';
import SpeakerCard from '../../components/SpeakerCard';
import videoActions from '../../redux/actions/videoActions';
import speakerAction from '../../redux/actions/speakerActions';
import topicAction from '../../redux/actions/topicActions';

const Video = ({ history }) => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);
  const videos = useSelector((state) => state.video.videos);
  const topics = useSelector((state) => state.topic.topics);

  useEffect(() => {
    dispatch(speakerAction.getSpeakers());
    dispatch(topicAction.getTopics());
    dispatch(videoActions.getVideos());
  }, [dispatch]);

  const [formData, setForm] = useState({
    title: '',
    description: '',
    thumbnailUrl: '',
    videoUrl: '',
    speakers: [],
    topics: [],
  });

  const onChange = (e) => {
    e.preventDefault();
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const onTopicChange = (e) => {
    e.preventDefault();
    const selectedTopic = topics.find((item) => item._id === e.target.value);
    selectedTopic && setForm({ ...formData, topics: [...formData.topics, selectedTopic] });
  };

  const onSpeakerChange = (e) => {
    e.preventDefault();
    const selectedSpeaker = speakers.find((item) => item._id === e.target.value);
    selectedSpeaker && setForm({ ...formData, speakers: [...formData.speakers, selectedSpeaker] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(videoActions.addVideo(formData));
    setForm({
      title: '',
      description: '',
      thumbnailUrl: '',
      videoUrl: '',
      speakers: [],
      topics: [],
    });
  };

  return (
    <>
      <TopBarMenu />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="my-5">Video Details</h3>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Video Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.title}
                  name="title"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Video Description</label>
                <textarea
                  className="form-control"
                  value={formData.description}
                  name="description"
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">ThumbnailUrl</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.thumbnailUrl}
                  name="thumbnailUrl"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Video Url</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.videoUrl}
                  name="videoUrl"
                  onChange={onChange}
                />
              </div>

              <div className="row my-2">
                {formData.speakers &&
                  formData.speakers.map((speaker) => (
                    <Fragment key={speaker._id}>
                      <SpeakerCard className=" col-4 mt-3" speaker={speaker} />
                      <div style={{ alignItems: 'center', display: 'flex' }}>
                        <div
                          style={{ fontSize: 12, borderRadius: '50%' }}
                          className="badge badge-danger ml-2"
                          onClick={() =>
                            setForm({
                              ...formData,
                              speakers: formData.speakers.filter(
                                (item) => item._id !== speaker._id
                              ),
                            })
                          }
                        >
                          X
                        </div>
                      </div>
                    </Fragment>
                  ))}
              </div>

              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    Speakers
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  value=""
                  onChange={onSpeakerChange}
                >
                  <option defaultValue>Choose...</option>
                  {speakers &&
                    speakers
                      .filter(
                        (speaker) => !formData.speakers.find((item) => item._id === speaker._id)
                      )
                      .map((speaker) => (
                        <option key={speaker._id} value={speaker._id}>
                          {speaker.name}
                        </option>
                      ))}
                </select>
              </div>

              {formData.topics &&
                formData.topics.map((topic) => (
                  <button
                    key={topic._id}
                    onClick={(e) => e.preventDefault()}
                    className={Style.topicButton + ' mr-2 mt-2'}
                  >
                    Topic: {topic.name}
                    <span
                      style={{ fontSize: 12, borderRadius: '50%' }}
                      className="badge badge-danger ml-2"
                      onClick={() =>
                        setForm({
                          ...formData,
                          topics: formData.topics.filter((item) => item._id !== topic._id),
                        })
                      }
                    >
                      X
                    </span>
                  </button>
                ))}

              <div className="input-group my-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    Topics
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  value=""
                  onChange={onTopicChange}
                >
                  <option defaultValue>Choose...</option>
                  {topics &&
                    topics
                      .filter((topic) => !formData.topics.find((item) => item._id === topic._id))
                      .map((topic) => (
                        <option key={topic._id} value={topic._id}>
                          {topic.name}
                        </option>
                      ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary mr-4" onClick={handleSubmit}>
                Submit
              </button>
              <button type="submit" className="btn btn-secondary" onClick={() => history.push('/')}>
                Back
              </button>
            </form>
          </div>
          <div className="col-6">
            <h3 className="col-12 mt-5 mb-4">Video Preview</h3>
            <VideoHorizontalCard className="col-12 mt-2 mb-1 " video={formData} />
            <h3 className="col-12 mt-5 mb-4">All Video</h3>
            {videos &&
              videos.map((video) => (
                <Fragment key={video._id}>
                  <VideoHorizontalCard className="col-12 mt-3 mb-2 " video={video} />
                  <div className="col-12">
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(videoActions.deleteVideo(video._id))}
                    >
                      Delete
                    </button>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
