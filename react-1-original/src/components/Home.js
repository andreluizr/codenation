import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'
import { withRouter } from 'react-router-dom';

const Home = ({
    recipes = [],
    searchString = ''
}) => (
    <div className="row">
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
    </div>
)
console.log('HOME: ',this.recipes)
Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default withRouter(Home)
