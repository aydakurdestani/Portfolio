export default function SkillsProgress({ skills }) {
  return (
    <>
      <h4 className="mb-3">Skills</h4>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <p className="mb-1">
            {skill.name} {skill.emoji}
          </p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${skill.level}%` }}
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
