import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Picker from './Picker'
import Posts from './Posts'

class AsyncAppComponnent extends Component {
    /* we whould have use the bind(this) if handleRefreshClick was a class function, 
    if its class property we dont need to use the bind*/
    // constructor(props) {
    //     super(props)
    //     this.handleRefreshClick = this.handleRefreshClick.bind(this)
    //     console.log(this)
    // }

    componentDidMount() {
        this.props.handleUpdate(this.props.selectedSubreddit)
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            this.props.handleUpdate(this.props.selectedSubreddit)
        }
    }

    handleRefreshClick = (e) => {
        e.preventDefault()

        const { selectedSubreddit } = this.props
        this.props.handleRefreshClick(selectedSubreddit)
    }

    render(){
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return (
        <div>
            <Picker
            value={selectedSubreddit}
            onChange={this.props.handleChange}
            options={['reactjs', 'frontend']}
            />
            <p>
            {lastUpdated && (
                <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                </span>
            )}
            {!isFetching && (
                <button onClick={this.handleRefreshClick}>Refresh</button>
            )}
            </p>
            {isFetching && posts.length === 0 && <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
            {posts.length > 0 && (
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <Posts posts={posts} />
            </div>
            )}
        </div>
        )
    }
}

AsyncAppComponnent.prototypes = {
    selectSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleRefreshClick: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired
}

export default AsyncAppComponnent