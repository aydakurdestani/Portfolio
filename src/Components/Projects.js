export default function Projects({ projects }) {
  return (
    <div className="p-4">
      <h4 className="mb-4">
        <i className="fa fa-code text-success"></i> Projects
      </h4>
      <ul className="list-unstyled">
        {projects.map((proj, index) => (
          <li key={index} className="mb-3">
            <h6>
              <i className="fa fa-folder-open text-success me-2"></i>
              <a
                href={proj.link}
                className="text-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.name}
              </a>{" "}
              <small className="text-muted">({proj.year})</small>
            </h6>
            {proj.description && (
              <p className="mb-0 text-muted small">{proj.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
