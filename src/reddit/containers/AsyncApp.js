import { connect } from 'react-redux'
import { 
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions'
import  AsyncAppComponnent from '../components/AsyncAppComponnent'

function handleUpdate(dispatch, selectedSubreddit){
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
}

function handleChange(dispatch, nextSubreddit) {
    dispatch(selectSubreddit(nextSubreddit))
    dispatch(fetchPostsIfNeeded(nextSubreddit))
}

function handleRefreshClick(dispatch, selectedSubreddit) {
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
}

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
        selectedSubreddit
    ] || {
        isFetching: true,
        items: []
    }
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

const mapDispachToProps = dispatch => {
    return {
        handleUpdate: (selectedSubreddit) => handleUpdate(dispatch, selectedSubreddit, dispatch),
        handleChange : (nextSubreddit) => handleChange(dispatch, nextSubreddit),
        handleRefreshClick : (selectedSubreddit) => handleRefreshClick(dispatch, selectedSubreddit)
    }
}

export default connect(mapStateToProps, mapDispachToProps)(AsyncAppComponnent)