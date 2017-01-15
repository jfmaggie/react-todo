import React from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link';


const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter
      });
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
