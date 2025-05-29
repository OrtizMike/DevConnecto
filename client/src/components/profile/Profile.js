import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperiences from './ProfileExperiences';
import ProfileEducations from './ProfileEducations';
import ProfileGithub from './ProfileGithub';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth
}) => {
    const params = useParams();
    useEffect(() => {
        getProfileById(params.id);
    }, [getProfileById, params.id]);
  return (
    <>
        { profile === null || loading ?
            <Spinner /> : (
                <>
                    <Link to="/profiles" className='btn btn-light'>
                        Back To Profiles
                    </Link>
                    { auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (
                        <Link to="/edit-profile" className='btn btn-light'>
                            Edit Profile
                        </Link>
                    )}
                    <div className="profile-grid my-1">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <ProfileExperiences profile={profile} />
                        <ProfileEducations profile={profile} />
                        {profile.githubusername && (
                            <ProfileGithub username={profile.githubusername} />
                        )}
                    </div>
                </>
            )
        }
    </>
  )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);