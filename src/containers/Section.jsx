import React from 'react';
import {
  connect,
} from 'react-redux';

import {
  handleInputChange,
} from '../actions';
import SectionComponent from '../components/Section';

const mapStateToProps = state => ({
  displayValue: state.displayValue,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: (value) => dispatch(handleInputChange(value)),
});

const Section = connect(mapStateToProps, mapDispatchToProps)(SectionComponent);

export default Section;
