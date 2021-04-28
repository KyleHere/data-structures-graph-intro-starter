
class Graph {
  constructor() {
    this.adjList = new Object();
   }

  addVertex(vertex) {
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdges(srcValue, destValue) {
    if(!this.adjList[srcValue]) this.addVertex(srcValue); 
    if(!this.adjList[destValue]) this.addVertex(destValue);

    // this.adjList[srcValue].push(destValue);
    // this.adjList[destValue].push(srcValue);

    let srcVertex = this.adjList[srcValue];   //grabs value of (key)srcValue
    let destVertex = this.adjList[destValue]; //grabs value of (key)dest

    srcVertex.push(destValue);  //pushes dest to value of src key
    destVertex.push(srcValue);  //pushes src to value of dest key
  }

  buildGraph(edgeList) {

  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

let graff = new Graph();
console.log(graff.adjList[0]);

module.exports = {
  Graph
};









