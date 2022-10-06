import React, { PureComponent } from 'react';

class ListExample extends PureComponent {
  render() {
    const todoList = [
      { taskName: 'React 공부하기', finished: true },
      { taskName: '이력서넣기', finished: false },
    ];
    return (
      <div>
        <div>
          {todoList.map((todo, i) => (
            <div key={`tl_${i}`}>{todo.taskName}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListExample;
