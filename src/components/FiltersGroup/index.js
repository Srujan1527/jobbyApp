import './index.css'

const FiltersGroup = props => {
  const renderEmploymentListView = () => {
    const {employmentTypesList, changeEmploymentType} = props

    return employmentTypesList.map(eachType => {
      const onChangeEmploymentItem = () =>
        changeEmploymentType(eachType.employmentTypeId)

      return (
        <div className="employment-container">
          <h1 className="employment-heading">Type of Employment</h1>

          <li
            className="employment-list-container"
            key={eachType.employmentTypeId}
          >
            <input
              type="checkbox"
              id={eachType.employmentTypeId}
              onChange={onChangeEmploymentItem}
            />
            <label className="label-text" htmlFor={eachType.employmentTypeId}>
              {eachType.label}
            </label>
          </li>

          <hr />
        </div>
      )
    })
  }

  const renderSalaryListView = () => {
    const {salaryRangesList, changeSalaryRange} = props
    const onChangeSalaryItem = () =>
      changeSalaryRange(salaryRangesList.salaryRangeId)

    return (
      <div className="employment-container">
        <h1 className="employment-heading">Salary Range</h1>
        {salaryRangesList.map(eachType => (
          <div className="employment-list-container">
            <input
              type="radio"
              id={eachType.salaryRangeId}
              value={eachType.salaryRangeId}
              name="SalaryList"
              onClick={onChangeSalaryItem}
            />
            <label className="label-text" htmlFor={eachType.salaryRangeId}>
              {eachType.label}
            </label>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div>{renderEmploymentListView()}</div>
      <div>{renderSalaryListView()}</div>
    </div>
  )
}

export default FiltersGroup
