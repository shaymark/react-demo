import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configurateStore from '../configureStore'
import AsyncApp from './AsyncApp'

const store = configurateStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}