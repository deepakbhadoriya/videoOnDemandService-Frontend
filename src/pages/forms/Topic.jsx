import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Style from './Style.module.css';
import TopBarMenu from '../../components/TopBarMenu';
import topicActions from '../../redux/actions/topicActions';

const Topic = ({ history }) => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topic.topics);

  useEffect(() => {
    dispatch(topicActions.getTopics());
  }, [dispatch]);

  const [formData, setForm] = useState({ name: '' });

  const onChange = (e) => {
    e.preventDefault();
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(topicActions.addTopic(formData));
    setForm({
      name: '',
    });
  };

  return (
    <>
      <TopBarMenu />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="my-5">Topic Details</h3>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Topic Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={formData.name}
                  name="name"
                  onChange={onChange}
                />
              </div>
              <button type="submit" class="btn btn-primary mr-4" onClick={handleSubmit}>
                Submit
              </button>
              <button type="submit" class="btn btn-secondary" onClick={() => history.push('/')}>
                Back
              </button>
            </form>
          </div>
          <div className="col-6">
            <div className="col-12">
              <h3 className=" mt-5 mb-3">Topic Preview</h3>
              <button className={Style.topicButton + ' mr-2 mb-3'}>Topic: {formData.name}</button>
            </div>

            <h3 className="col-12 mt-5 mb-4">All Topic</h3>
            {topics &&
              topics.map((topic) => (
                <div className="col-12">
                  <button className={Style.topicButton}>
                    Topic: {topic.name}
                    <span
                      style={{ fontSize: 12, borderRadius: '50%' }}
                      className="badge badge-danger ml-2"
                      onClick={() => dispatch(topicActions.deleteTopic(topic._id))}
                    >
                      X
                    </span>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
