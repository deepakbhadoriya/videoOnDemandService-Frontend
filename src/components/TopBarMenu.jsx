import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import TopBarMenuStyle from './TopBarMenu.module.css';

const TopBarMenu = () => {
  const history = useHistory();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-lg-5 p-md-4 p-sm-3 p-3">
          <Link to="/">
            <img src="assets/images/logo.svg" alt="" className={TopBarMenuStyle.logo} />
          </Link>
          <i
            className="fas fa-caret-down"
            style={{ float: 'right', marginTop: 10 }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div
              class={TopBarMenuStyle.dropdown + ' dropdown-menu'}
              aria-labelledby="dropdownMenuButton"
            >
              <span
                onClick={() => history.push('/video')}
                className="btn subHeading2 btn-secondary dropdown-item"
              >
                Manage Video
              </span>
              <span
                onClick={() => history.push('/speaker')}
                className="btn subHeading2 btn-secondary dropdown-item"
              >
                Manage Speaker
              </span>
              <span
                onClick={() => history.push('/topic')}
                className="btn subHeading2 btn-secondary dropdown-item"
              >
                Manage Topic
              </span>
            </div>
          </i>
          <img
            src="https://www.svgrepo.com/show/170303/avatar.svg"
            alt=""
            className={TopBarMenuStyle.avatarContainer}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <button type="button" className={TopBarMenuStyle.bellContainer}>
            <i className="fas fa-bell primary-color"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBarMenu;
