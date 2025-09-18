import Information from "./Information";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

//Information section
export default function AboutMe({ profile }) {
  return (
    <>
      <div className="col-lg-3 col-sm-12 bg-white me-2 p-0 shadow-lg rounded">
        <Information profile={profile} />
      </div>
      <div className="col-lg-6 col-sm-12 bg-white me-2 shadow-lg rounded">
        <div>
          <Education education={profile.Education} />
          <WorkExperience experience={profile.workExperience} />
        </div>
      </div>
      <div className="col-lg-2 col-sm-12 bg-white p-0 shadow-lg rounded ">
        <Projects projects={profile.projects} />
      </div>
    </>
  );
}
