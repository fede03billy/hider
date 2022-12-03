# hider
A simple encrypt-decrypt tool.

## Install the module from the npm registry
npm install hider

## Import the default exports from the module
const { hide, unhide } = require('hider');

or

import { hide, unhide } from 'hider';

## Use the imported values
hide('foo', 'bar'); // => '040714'
unhide('foo', '040714'); // => 'bar'