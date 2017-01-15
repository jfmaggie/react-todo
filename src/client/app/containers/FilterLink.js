import React from 'react';
import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';


const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
