import './index.css'

const SkillCard = props => {
  const {skillDetails} = props
  const {skillName, skillImageUrl} = skillDetails

  return (
    <li className="skill-list-container">
      <img src={skillImageUrl} alt="skill" className="skill-image" />
      <h1 className="skill-name">{skillName}</h1>
    </li>
  )
}
export default SkillCard
