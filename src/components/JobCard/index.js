import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {BsFillBagFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="title-img-container">
          <img
            src={companyLogoUrl}
            className="company-logo"
            alt="company logo"
          />
          <div className="title-container">
            <h1 className="job-title">{title}</h1>
            <div className="rating-container">
              <AiFillStar className="star" size={20} />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-type-package-container">
          <div className="location-type-container">
            <div className="location-container">
              <ImLocation className="location-image" size={20} />
              <p className="location">{location}</p>
            </div>
            <div className="location-container">
              <BsFillBagFill className="location-image" size={20} />
              <p className="location">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="line" />
        <div className="description-container">
          <h1 className="description-heading">Description</h1>
          <p className="description-paragraph">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
