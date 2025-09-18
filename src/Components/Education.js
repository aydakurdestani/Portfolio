export default function Education({ education }) {
  return (
    <div className="p-4 pb-0">
      <h4 className="mb-4">
        <i className="fa fa-book text-success"></i> Education
      </h4>
      {education.map((edu, index) => (
        <div key={index} className="mb-3 p-3 shadow-sm">
          <h5 className="mb-1">{edu.degree}</h5>
          <p className="mb-1">
            <strong>Field:</strong> {edu.field}
          </p>
          <p className="mb-1">
            <strong>School:</strong> {edu.school}
          </p>
          <p className="mb-1">
            <strong>Year:</strong> {edu.startYear} - {edu.endYear}
          </p>
          {edu.score && (
            <p className="mb-0">
              <strong>Score:</strong> {edu.score}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
