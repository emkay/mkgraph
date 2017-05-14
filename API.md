# API

## `Node(value, [relationships])`

### `n.drawEdge(node)`

Draws an edge to a specific `Node`. Note that while this takes a `Node` as a parameter, `Graph.drawEdge` takes `Node` values.

## `Graph([nodes])`

### `g.add(value)`

Add a new `Node` with value `value` to the graph.

### `g.drawEdge(value, value2)`

Draw an edge between two nodes. Parameters are the values of the nodes.

### `g.bfs(rootValue, endValue)`

Find a specific `Node` with `endValue` in the graph starting from the `Node` that contains `rootValue` as a value.

### `g.shortestPath(rootValue, endValue)`

Returns an array of node values in order. Uses `g.bfs` to determine the path.
