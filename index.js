class Node {
  constructor (value, relationships) {
    this.value = value
    this.relationships = relationships || new Set()
  }

  drawEdge (node) {
    this.relationships.add(node.value)
    node.relationships.add(this.value)
  }
}

class Graph {
  constructor (nodes) {
    this.nodes = nodes || {}
  }

  add (value) {
    const node = new Node(value)
    this.nodes[node.value] = node
  }

  bfs (rootValue, value) {
    const visited = new Set()
    const q = []

    const node = this.nodes[rootValue]
    visited.add(node.value)
    q.unshift(node)

    while (q.length !== 0) {
      let current = q.pop()
      if (current.value === value) return current

      current.relationships.forEach((v) => {
        const n = this.nodes[v]
        if (!visited.has(v)) {
          visited.add(v)
          n.parent = current
          q.unshift(n)
        }
      })
    }
  }

  dfs (rootValue, visited) {
    visited = visited || new Set()
    const node = this.nodes[rootValue]

    visited.add(node.value)
    node.relationships.forEach(n => {
      if (!visited.has(n)) {
        return this.dfs(n, visited)
      }
    })

    return visited
  }

  shortestPath (rootValue, value) {
    let result = this.bfs(rootValue, value)
    const path = []

    while (result.parent !== undefined) {
      path.unshift(result.value)
      result = result.parent
    }

    path.unshift(result.value)

    return path
  }

  drawEdge (n, n2) {
    const node = this.nodes[n]
    const node2 = this.nodes[n2]
    node.drawEdge(node2)
    node2.drawEdge(node)
  }
}

module.exports = {
  Node,
  Graph
}
