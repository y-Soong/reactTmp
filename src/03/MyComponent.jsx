import React, { Component } from 'react'; // 이부분이 Component냐 PureComponent냐의 차이인데 shouldComponentUpdate()를 반환값(true, false)을 자동으로 정해주는 컴포넌트이다.

class MyComponent extends Component {
  componentDidUpdate() {
    console.log('MyComponent componentDidUpdate 호출 !!');
  }

  render() {
    return null;
  }
}

export default MyComponent;
