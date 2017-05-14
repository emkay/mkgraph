const fs = require('fs')
const {Graph, Node} = require('..')

const states = fs.readFileSync(`${__dirname}/states.txt`, {encoding: 'utf8'})
  .split('\n')
  .filter(s => s)
  .map(s => new Node(s.toLowerCase().trim()))

const statesMap = {}

states.forEach((s) => {
  statesMap[s.value] = s
})

const g = new Graph(statesMap)

g.drawEdge('california', 'nevada')
g.drawEdge('california', 'arizona')
g.drawEdge('california', 'oregon')

g.drawEdge('arizona', 'nevada')
g.drawEdge('arizona', 'utah')
g.drawEdge('arizona', 'new mexico')
g.drawEdge('arizona', 'colorado')

g.drawEdge('nevada', 'utah')
g.drawEdge('nevada', 'oregon')
g.drawEdge('nevada', 'idaho')
g.drawEdge('nevada', 'arizona')

g.drawEdge('oregon', 'washington')
g.drawEdge('oregon', 'idaho')

g.drawEdge('washington', 'idaho')

g.drawEdge('idaho', 'montana')
g.drawEdge('idaho', 'wyoming')
g.drawEdge('idaho', 'utah')

g.drawEdge('utah', 'colorado')
g.drawEdge('utah', 'wyoming')
g.drawEdge('utah', 'new mexico')

g.drawEdge('new mexico', 'colorado')
g.drawEdge('new mexico', 'oklahoma')
g.drawEdge('new mexico', 'texas')

g.drawEdge('colorado', 'wyoming')
g.drawEdge('colorado', 'kansas')
g.drawEdge('colorado', 'nebraska')
g.drawEdge('colorado', 'oklahoma')

g.drawEdge('wyoming', 'montana')
g.drawEdge('wyoming', 'south dakota')
g.drawEdge('wyoming', 'nebraska')

g.drawEdge('montana', 'north dakota')
g.drawEdge('montana', 'south dakota')

g.drawEdge('texas', 'louisiana')
g.drawEdge('texas', 'oklahoma')
g.drawEdge('texas', 'arkansas')

g.drawEdge('oklahoma', 'kansas')
g.drawEdge('oklahoma', 'missouri')
g.drawEdge('oklahoma', 'arkansas')

g.drawEdge('kansas', 'missouri')
g.drawEdge('kansas', 'nebraska')

g.drawEdge('nebraska', 'south dakota')
g.drawEdge('nebraska', 'iowa')
g.drawEdge('nebraska', 'missouri')

g.drawEdge('south dakota', 'north dakota')
g.drawEdge('south dakota', 'minnesota')
g.drawEdge('south dakota', 'iowa')

g.drawEdge('north dakota', 'minnesota')

const path = g.shortestPath(
  'california', 'minnesota'
)
console.log(path)
