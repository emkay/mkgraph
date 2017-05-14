# mkgraph
A tiny module for having fun with graphs.

## Install

`npm i mkgraph`

## Usage

```javascript
const {Graph, Node} = require('mkgraph')

const g = new Graph()

g.add('a')
g.add('b')
g.add('c')

g.drawEdge('a', 'b')
g.drawEdge('b', 'c')

g.shortestPath('a', 'c') // ['a', 'b', 'c']
```

## Code of Conduct

## Contributing
