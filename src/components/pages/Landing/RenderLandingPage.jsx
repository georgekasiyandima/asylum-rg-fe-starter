import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions.
          </h3>
        </div>
      </div>

      <div className="graphs-section">
  {/* Grant Rates by Office */}
  <div className="graph-container grant-rates-by-office-graph-container">
    <img
      src={GrantRatesByOfficeImg}
      alt="Graph showing Grant Rates by Office"
      onClick={() => history.push('/grant-rates-by-office')}
      className="graph-img"
    />
    <p className="graph-text">Search Grant Rates by Office</p>
  </div>

  {/* Grant Rates by Nationality */}
  <div className="graph-container grant-rates-by-nationality-container">
    <img
      src={GrantRatesByNationalityImg}
      alt="Graph showing Grant Rates by Nationality"
      onClick={() => history.push('/grant-rates-by-nationality')}
      className="graph-img"
    />
    <p className="graph-text">Search Grant Rates by Nationality</p>
  </div>

  {/* Grant Rates Over Time */}
  <div className="graph-container grant-rates-over-time-container">
    <img
      src={GrantRatesOverTimeImg}
      alt="Graph showing Grant Rates over Time"
      onClick={() => history.push('/grant-rates-over-time')}
      className="graph-img"
    />
    <p className="graph-text">Search Grant Rates over Time</p>
  </div>
</div>

{/* Button Section */}
<div className="view-more-data-btn-container">
  <Button
    type="default"
    className="view-data-btn"
    onClick={() => history.push('/graphs')}
  >
    View the Data
  </Button>

  <Button
    type="default"
    className="download-data-btn"
  >
    Download the Data
  </Button>
</div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set.
          </h3>
        </div>
      </div>
      
      {/* Bottom Section Implementation */}
      <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
        <div className="stats-container">
          <div className="first-stat-container">
            <h2>36%</h2>
            <h3>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </h3>
          </div>
          <div className="second-stat-container">
            <h2>5%</h2>
            <h3>
              The New York asylum office grant rate dropped to 5 percent in fiscal
              year 2020.
            </h3>
          </div>
          <div className="third-stat-container">
            <h2>6x Lower</h2>
            <h3>
              Between fiscal year 2017 and 2020, the New York asylum office’s
              average grant rate was six times lower than the San Francisco asylum
              office.
            </h3>
          </div>
        </div>
        <button className="read-more-btn">Read More</button>
        <div className="back-to-top">
          <a href="#top">Back To Top ^</a>
        </div>
      </div>
    </div>
  );
}

export default RenderLandingPage;
