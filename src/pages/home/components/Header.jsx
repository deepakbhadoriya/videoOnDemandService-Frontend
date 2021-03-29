import React from 'react';

import headerStyle from './Header.module.css';
import TopBarMenu from '../../../components/TopBarMenu';

const Header = () => {
  return (
    <div className={headerStyle.headerContainer}>
      <TopBarMenu />
      <div className="container ">
        <div className="row">
          <div className="col-12 d-lg-none d-md-none d-block p-4">
            <img className="img-fluid" src="assets/images/bannerLeft.svg" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-12 p-4">
            <div className={headerStyle.bannerText}>
              Diagnosis & Monitoring of airway diseases in the Era of Social Distancing
            </div>
            <button className={headerStyle.bannerButton}>WATCH NOW</button>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-lg-block d-md-block d-none p-4">
            <img className="img-fluid" src="assets/images/bannerLeft.svg" alt="" />
          </div>
        </div>
      </div>
      <div
        className={headerStyle.bottomWave}
        style={{ backgroundImage: "url('assets/images/bannerBottomWave.svg')" }}
      >
        <div className={headerStyle.bottomWaveTopLayer}></div>
      </div>
    </div>
  );
};

export default Header;
