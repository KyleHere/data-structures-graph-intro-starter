
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
//+++++++Also VVV++++++++++++++++//
      // buildGraph(edges) {
      //   // edges is a 2d array, e.g.: [[“a”, b”], [“b”, c”]]
      //   // this.adjList = {“a”: [b], “b”: [c]}
      //       edges.forEach(pair => {
      //     this.addVertex(pair[0]);
      //     this.addEdges(pair[0], pair[1]);
      //   });
      //   return this.adjList;

      // }
//+++++++++++++++++++++++++++++++++//
  



  breadthFirstTraversal(startingVertex) {
    let queue = [startingVertex]; //initialize queue
    let store = [];
    let checked = new Set();

    while(queue.length){
      //checking for duplicate nodes
      let shiftedVertex = queue.shift();
      if(checked.has(shiftedVertex)) continue; //if already visited

      //account for already visited verts
      checked.add(shiftedVertex); //add to visited
      store.push(shiftedVertex);  //add to existing network of vertex

      //add all neighbors to queue
      queue.push(...this.adjList[shiftedVertex]); //add all neighbors to queue
    }

    return store;
  }

  depthFirstTraversalIterative(startingVertex) {

    let store = [];
    let stack = [startingVertex];
    let visited = new Set();

    while(stack.length){
      let popped = stack.pop();
      if(visited.has(popped)) continue;

      visited.add(popped);
      store.push(popped);


      stack.push(...this.adjList[popped]);
    }

    return store;
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    
    

  }

}

module.exports = {
  Graph
};
