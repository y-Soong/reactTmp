// 필수 리액트 구동 모듈들이다.
import React from 'react';
import ReactDOM from 'react-dom';

// 초기 화면을 구성하는 사용자 코드이다.
import App from './App';

// 리액트 엔진이 화면을 출력하는 코드이다.
// id가 root인 엘리먼트에 컴포넌트를 출력한다.
ReactDOM.render(<App />, document.getElementById('root'));