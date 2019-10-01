import fetch from 'cross-fetch'

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT"
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT"
export const REQUEST_POSTS = "REQUEST_POST"
export const RECEIVE_POSTS = "RECIVE_POST"

export const selectSubreddit = (subReddit) => {
    return {
        type: SELECT_SUBREDDIT,
        subReddit
    }
}

export const invalidateSubreddit = (subReddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subReddit
    }
}

export const requestPosts = (subReddit) => {
    return {
        type: REQUEST_POSTS,
        subReddit
    }
}

export const recievePosts = (subReddit, json) => {
    return {
         type: RECEIVE_POSTS,
         subReddit,
         posts: json.data.children.map(child => child.data), 
         reciveAt: Date.now()
    }
}

export const fetchPosts = (subreddit) => {
    return async (dispatch) => {
        dispatch(requestPosts(subreddit))
        try {
            const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
            const json = await response.json();
            return dispatch(recievePosts(subreddit, json))
        }
        catch (error) {
            console.log('An error accored', error);
        }
    }  
}

export const shouldFetchPosts = (state, subReddit) => {
    const posts = state.postsBySubreddit[subReddit]
    if(!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export const fetchPostsIfNeeded = (subReddit) => {
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), subReddit)) {
            return dispatch(fetchPosts(subReddit))
        } else {
            return Promise.resolve()
        }
    }
} 