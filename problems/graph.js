
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
    // console.log(edgeList)

    for(let i = 0; i < edgeList.length; i++){

        let vertex1 = edgeList[i][0];
        // console.log(vertex1)
        let vertex2 = edgeList[i][1];

        this.addVertex(vertex1);
        this.addVertex(vertex2);

        this.addEdges(vertex1, vertex2);
    }
    return this.adjList;
  }

  breadthFirstTraversal(startingVertex) {
    let store = [];
    let queue = [startingVertex]
    let visited = new Set();

    while(queue.length){
      let shifted = queue.shift();
      if(visited.has(shifted)) continue;

      visited.add(shifted)
      store.push(shifted)
      queue.push(...this.adjList[shifted])

    }
    return store;
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
