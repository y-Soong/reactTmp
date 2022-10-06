import React, { PureComponent } from 'react';

class TestPureComponent extends PureComponent {
  componentDidUpdate() {
    console.log('PureComponent ComponentUpdate 호출 !!');
  }

  render() {
    return null;
  }
}

export default TestPureComponent;
