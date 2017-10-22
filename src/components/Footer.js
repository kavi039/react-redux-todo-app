import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL" children={'All'}/>

        {/*</FilterLink>*/}
        {', '}
        <FilterLink filter="SHOW_ACTIVE" children={'Active'}/>
        {', '}
        <FilterLink filter="SHOW_COMPLETED" children={'Completed'}/>

    </p>
)

export default Footer