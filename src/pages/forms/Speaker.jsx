import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SpeakerCard from '../../components/SpeakerCard';
import TopBarMenu from '../../components/TopBarMenu';
import speakerAction from '../../redux/actions/speakerActions';

const Speaker = ({ history }) => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);

  useEffect(() => {
    dispatch(speakerAction.getSpeakers());
  }, [dispatch]);

  const [formData, setForm] = useState({
    name: '',
    highestEdu: '',
    imageUrl: '',
  });

  const onChange = (e) => {
    e.preventDefault();
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(speakerAction.addSpeaker(formData));
    setForm({
      name: '',
      highestEdu: '',
      imageUrl: '',
    });
  };

  return (
    <>
      <TopBarMenu />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="my-5">Speaker Details</h3>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Speaker Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={formData.name}
                  name="name"
                  onChange={onChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Speaker highest Education</label>

                <input
                  type="text"
                  class="form-control"
                  value={formData.highestEdu}
                  name="highestEdu"
                  onChange={onChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Image Url</label>
                <input
                  type="text"
                  class="form-control"
                  value={formData.imageUrl}
                  name="imageUrl"
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
            <h3 className="col-12 mt-5 mb-4">Speaker Preview</h3>
            <SpeakerCard className=" col-6 mt-3" speaker={formData} />
            <h3 className="col-12 mt-5 mb-4">All Speaker</h3>
            {speakers &&
              speakers.map((speaker) => (
                <div style={{ display: 'flex' }}>
                  <SpeakerCard className=" col-6 mt-3" speaker={speaker} />
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div
                      style={{ fontSize: 12, borderRadius: '50%' }}
                      className="badge badge-danger ml-2"
                      onClick={() => dispatch(speakerAction.deleteSpeaker(speaker._id))}
                    >
                      X
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speaker;
