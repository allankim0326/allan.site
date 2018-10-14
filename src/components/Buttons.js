import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends Component {
  static propTypes = {
    punchMe: PropTypes.func.isRequired,
    punchMeToo: PropTypes.func.isRequired,
    cureYou: PropTypes.func.isRequired,
    touchMe: PropTypes.func.isRequired,
    touchMeToo: PropTypes.func.isRequired
  };
  render() {
    const punchMe = this.props.punchMe;
    const punchMeToo = this.props.punchMeToo;
    const cureYou = this.props.cureYou;
    const touchMe = this.props.touchMe;
    const touchMeToo = this.props.touchMeToo;
    return (
      <>
        <button onClick={punchMe}>Punch me!</button>
        <button onClick={punchMeToo}>Punch me!</button>
        <button onClick={cureYou}>I will cure you!</button>
        <button onClick={touchMe}>Touch me!</button>
        <button onClick={touchMeToo}>Touch me too!</button>
      </>
    );
  }
}
