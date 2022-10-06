import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.vlaue);
    }
  }

  componentDidMount() {
    // autoFocus 값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치한다.
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }

  componentDidUpdate() {
    // autoFocus 값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치한다.
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange} // input 값이 변경되었을 때 onChange 콜백 함수를 호출한다.
          onFocus={onFocus} // 프로퍼티로 전달받은 콜백 함수를 DOM 이벤트 프로퍼티에 연결하여 input에 마우스 커서가 포커스될 때 상위 컴포넌트의 콜백 함수를 호출한다.
          value={value}
          type={type}
        />
        {errorMessage && <span className='error'>{errorMessage}</span>}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']), // 문자열의 값 text, number, price중 하나의 값만 가질 수 있다.
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text', // type의 기본형은 text이다.
};

export default Input;
