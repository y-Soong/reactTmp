import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      count,
      newCount: count === state.count ? state.newCount : count, // 프로퍼티가 변경되지 않았다면 기존 state값으로 설정, 프로퍼티가 변경되었다면 변경된 프로퍼티 값으로 설정한다.
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    return (
      <div>
        NewCounter 현재 카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트증가</button>
      </div>
    );
  }
}

export default NewCounter;
