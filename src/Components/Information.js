import profileData from "./App";
import Languages from "./Languages";
import SkillsProgress from "./SkillsProgress";
import SocialLinks from "./SocialLinks";

export default function Information({ profile }) {
  return (
    <>
      <div className="position-relative">
        <img
          src={profile.avatar}
          alt="profile photo"
          className="imgSize rounded"
        />
      </div>
      <div className="container">
        <h5 className="mt-2">{profile.name}</h5>
        <p className="mt-4">{profile.title}</p>
        <p>{profile.location}</p>
        <p>{profile.gmail}</p>
        <p>{profile.phone}</p>
        <SocialLinks />
        <hr />
        <SkillsProgress skills={profile.skills} />
        <hr className="mt-4" />
        <Languages langs={profile.languages} />
      </div>
    </>
  );
}
