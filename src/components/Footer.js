import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
   <p>
       <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Show Active</FilterLink>
       {', '}
       <FilterLink filter={VisibilityFilters.SHOW_ALL}>Show All</FilterLink>
       {', '}
       <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Show Completed</FilterLink>
   </p>
)

export default Footer