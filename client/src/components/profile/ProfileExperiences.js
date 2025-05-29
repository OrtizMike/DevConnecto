import React from 'react';
import PropTypes from 'prop-types';
import ProfileExperience from './ProfileExperience';

const ProfileExperiences = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {experience.length > 0 ?
          (
            experience.map(exp => (
                <ProfileExperience key={exp._id} experience={exp} />
            ))
          ) :(
            <h4>No experience credentials</h4>
          )}
    </div>
  )
}

ProfileExperiences.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileExperiences;