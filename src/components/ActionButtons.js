import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

ActionButtons.propTypes = {
  punchMe: PropTypes.func.isRequired,
  punchMeToo: PropTypes.func.isRequired,
  cureYou: PropTypes.func.isRequired,
  touchMe: PropTypes.func.isRequired,
  touchMeToo: PropTypes.func.isRequired
};

export default function ActionButtons({
  punchMe,
  punchMeToo,
  cureYou,
  touchMe,
  touchMeToo
}) {
  return (
    <div style={{ display: 'flex' }}>
      <Button color="pink" onClick={punchMe}>
        Punch me!
      </Button>
      <Button color="red" style={{ marginLeft: '1rem' }} onClick={punchMeToo}>
        Punch me!
      </Button>
      <Button color="#f902f1" style={{ marginLeft: '1rem' }} onClick={cureYou}>
        I will cure you!
      </Button>
      <Button style={{ marginLeft: '1rem' }} onClick={touchMe}>
        Touch me!
      </Button>
      <Button style={{ marginLeft: '1rem' }} onClick={touchMeToo}>
        Touch me too!
      </Button>
    </div>
  );
}
