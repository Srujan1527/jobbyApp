import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {BsFillBagFill} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import SkillCard from '../SkillCard'
import './index.css'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobData: {},
    similarJobsData: [],
    skills: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  getSkills = skill => ({
    skillImageUrl: skill.image_url,
    skillName: skill.name,
  })

  getFormattedData = data => ({
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    title: data.title,
    skills: data.skills,
    description: data.life_at_company.description,
    imageUrl: data.life_at_company.image_url,
  })

  getSimilarJobData = similarJob => ({
    companyLogoUrl: similarJob.company_logo_url,
    employmentType: similarJob.employment_type,
    id: similarJob.id,
    jobDescription: similarJob.job_description,
    location: similarJob.location,
    rating: similarJob.rating,
    title: similarJob.title,
  })

  getJobItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      console.log(fetchedData)

      const updatedData = this.getFormattedData(fetchedData.job_details)
      const updatedSkillsData = fetchedData.job_details.skills.map(eachSkill =>
        this.getSkills(eachSkill),
      )
      const similarJobDetails = fetchedData.similar_jobs.map(eachSimilarJob =>
        this.getSimilarJobData(eachSimilarJob),
      )

      this.setState({
        jobData: updatedData,
        skills: updatedSkillsData,
        similarJobsData: similarJobDetails,
        apiStatus: apiStatusConstants.success,
      })
    }

    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderJobItemDetails = () => {
    const {jobData, skills} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
      description,
      imageUrl,
    } = jobData

    const {skillImageUrl, skillName} = skills

    return (
      <div>
        <div className="job-item">
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
            <div className="description-sub-container">
              <h1 className="description-heading">Description</h1>
              <div className="visit-container">
                <a className="anchor-heading" href={companyWebsiteUrl}>
                  Visit{' '}
                </a>
                <BiLinkExternal className="anchor-icon" size={15} />
              </div>
            </div>

            <p className="description-paragraph">{jobDescription}</p>
          </div>
          <h1 className="skills-heading"> Skills</h1>
          <ul className="skills-container">
            {skills.map(eachSkill => (
              <SkillCard skillDetails={eachSkill} key={eachSkill.skillName} />
            ))}
          </ul>
          <h1 className="life-heading">Life at Company</h1>
          <div className="life-container">
            <p className="life-paragraph">{description}</p>
            <img src={imageUrl} alt="life" className="life-image" />
          </div>
        </div>
        <h1 className="similar-heading">Similar Jobs</h1>
      </div>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="jobs-container">{this.renderJobItemDetails()}</div>
      </>
    )
  }
}

export default JobItemDetails
