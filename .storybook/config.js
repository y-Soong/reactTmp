import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

function loadStories() {      // 스토리 파일을 이곳에 추가할 수 있다.
    // require('../src/stories/InputStory');
    // require('../src/stories/NewCounterStory');

    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach((srcFile) => {
        interopRequireDefault(context(srcFile));
    });
}

configure(loadStories, module);