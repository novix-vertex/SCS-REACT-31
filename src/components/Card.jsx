const Card = ({employee}) => {
    return (
        <div className='card'>
            <img src={employee.profile_pic} alt="" />
            <div className='content'>
                <h1>{employee.name}</h1>
                <h2>{employee.designation}</h2>
                <p>{employee.brief}</p>
                <div class="stats">
                    <div class="exp info"><h4>Experience</h4><h5>{employee.experience_years} Yrs</h5></div>
                    <div class="prj info"><h4>Projects</h4><h5>{employee.projects_done} Projects</h5></div>
                    <div class="sal info"><h4>Salary</h4><h5>{employee.salary_lpa} LPA</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Card