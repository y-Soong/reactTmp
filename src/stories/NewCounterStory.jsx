import React from 'react';
import { storiesOf } from '@storybook/react';

import NewCounter from '../counter/NewCounter';

storiesOf('NewCounter', module).add('기본설정', () => <NewCounter count={0} />);
