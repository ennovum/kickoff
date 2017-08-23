import {sum} from './scripts-typed';

function helloWorld() {
    window.console.log('Hello world!', `1 + 2 = ${sum(1, 2)}`);
}

export {helloWorld};
