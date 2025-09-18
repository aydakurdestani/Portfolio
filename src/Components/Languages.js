export default function Languages({ langs }) {
  return (
    <>
      <h4 className="mb-3">Languages</h4>
      {langs.map((lang, index) => (
        <div key={index} className="mb-3">
          <p className="mb-1">{lang.name}</p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              aria-valuenow={lang.level}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${lang.level}%` }}
            >
              {lang.level}%
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
