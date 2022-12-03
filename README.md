# hider
A simple encrypt-decrypt tool.

## Install the module from the npm registry
`npm install hider`

## Import the default exports from the module
`import hider from 'hider';`

## Use the imported values
`hider.hide('foo', 'bar'); // => '040714'`
`hider.unhide('foo', '040714'); // => 'bar'`