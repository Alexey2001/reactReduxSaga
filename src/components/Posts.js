import React from "react";
import {connect} from 'react-redux'
import Post from "./Post";

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateTiProps = state => {
    console.log(state)
    return {
        syncPosts: state.posts.posts
    }
} //преобразовывает весь стейт в пропсы

export default connect (mapStateTiProps)(Posts)