export default function WorkExperience({ experience }) {
  return (
    <div className="p-4">
      <h4 className="mb-4">
        <i className="fa fa-briefcase text-success"></i> Work Experience
      </h4>
      {experience.map((job, index) => (
        <div key={index} className="mb-4 p-3 shadow-sm">
          <h5>{job.role}</h5>
          <a
            href={job.website}
            className="text-success mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {job.company}
          </a>
          <p className="text-muted mt-2">
            <i className="fa fa-calendar me-2"></i> {job.startDate} –{" "}
            <span
              className={
                job.endDate === "Present"
                  ? "bg-success px-2 rounded text-light"
                  : ""
              }
            >
              {job.endDate}
            </span>
          </p>

          <ul>
            {job.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
