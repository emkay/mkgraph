const tap = require('tap')

const {Graph, Node} = require('..')

const setup = () => {
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')

  const g = new Graph({a, b, c, d})
  return g
}

tap.test('add node to graph', t => {
  t.plan(1)

  const g = setup()
  g.add('e')

  t.equal(g.nodes['e'].value, 'e', 'should have a `Node` equal to `e`')
})

tap.test('draw edges', t => {
  t.plan(2)

  const g = setup()
  g.drawEdge('a', 'b')

  const relationships = g.nodes['a'].relationships

  t.equal(relationships.size, 1, 'Node `a` should have a relationship')
  t.equal(relationships.has('b'), true, 'Node `a` should have a relationship to Node `b`')
})

tap.test('shortest path search', t => {
  t.plan(1)

  const g = setup()
  g.add('e')
  g.drawEdge('a', 'b')
  g.drawEdge('b', 'c')
  g.drawEdge('c', 'd')
  g.drawEdge('d', 'e')

  const path = g.shortestPath('a', 'e')
  t.deepEqual(path, ['a', 'b', 'c', 'd', 'e'], 'should have the shorest path')
})

tap.test('setup empty graph', t => {
  t.plan(1)
  const g = new Graph()
  g.add('a')

  t.equal(g.nodes['a'].value, 'a', 'should be a Node with value `a`')
})

tap.test('dfs', t => {
  t.plan(1)

  const g = setup()
  g.add('e')
  g.drawEdge('a', 'b')
  g.drawEdge('b', 'c')
  g.drawEdge('c', 'd')
  g.drawEdge('d', 'a')
  g.drawEdge('e', 'a')

  const s = g.dfs('c')
  t.equal(s.has('a'), true, 'should have value c')
})
