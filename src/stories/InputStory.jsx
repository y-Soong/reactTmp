import React from 'react';
import { storiesOf } from '@storybook/react'; // 스토리를 스토리북 도구에 추가해주는 storiesOf() 함수를 import

import Input from '../03/Input';

storiesOf('Input', module)
  .add('기본설정', () => <Input name='name' />) // 'Input' : 스토리북 도구에 표시할 스토리의 이름
  .add('label 예제', () => <Input name='name' label='이름' />);
// '기본설정' : 스토리북 도구에 표시할 메뉴 이름
