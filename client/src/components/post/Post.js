import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import Comments from './Comments';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';

const Post = ({ getPost, post: { post, loading } }) => {
    const params = useParams();

    useEffect(() => {
        getPost(params.id)
    }, [getPost, params.id]);

  return (
    loading || post === null ? ( 
        <Spinner />
     ) : (
        <>
            <Link to="/posts" className="btn">Back to Posts</Link>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <Comments post={post} />
        </>
     )
  )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost})(Post);