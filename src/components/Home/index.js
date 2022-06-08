import './index.css'
import {Link} from 'react-router-dom'

import Header from '../Header'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">
        Find The Job That <br />
        Fits Your Life
      </h1>
      <p className="home-description">
        Millions of people are searching for jobs,salary
        <br />
        information, company reviews.Find the job that fits your <br />
        abilities and potential
      </p>
      <Link to="/jobs">
        <button type="button" className="home-button">
          Find Jobs
        </button>
      </Link>
    </div>

    <div className="mobile-home-container">
      <h1 className="mobile-home-heading">Find The Job That Fits Your Life</h1>
      <p className="mobile-home-description">
        Millions of people are searching for jobs,salary
        <br />
        information, company reviews.Find the job that fits your <br />
        abilities and potential
      </p>
      <Link to="/jobs">
        <button className="mobile-home-button" type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
