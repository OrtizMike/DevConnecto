import React from 'react';
import PropTypes from 'prop-types';
import ProfileEducation from './ProfileEducation';

const ProfileEducations = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {education.length > 0 ?
          (
            education.map(exp => (
                <ProfileEducation key={exp._id} education={exp} />
            ))
          ) :(
            <h4>No education credentials</h4>
          )}
    </div>
  )
}

ProfileEducations.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileEducations;