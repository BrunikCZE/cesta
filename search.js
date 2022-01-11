let g = new Graph();
g.addNode("A"); 
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");
g.addNode("H");
g.addNode("CH");
g.addEdge("A", "B", 1);
g.addEdge("A", "E", 3);
g.addEdge("B", "E", 2);
g.addEdge("C", "F", 1);
g.addEdge("E", "D", 2);
g.addEdge("F", "H", 2);
g.addEdge("E", "H", 3);
g.addEdge("H", "CH", 1);
g.addEdge("B", "F", 2);
g.addEdge("B", "C", 4);


console.log(g.floydWarshallAlgorithm());

function floydWarshallAlgorithm() {
    let dist = {};
    for (let i = 0; i < this.nodes.length; i++) {
        dist[this.nodes[i]] = {};
        this.edges[this.nodes[i]].forEach(e => (dist[this.nodes[i]][e.node] = e.weight));
        this.nodes.forEach(n => {
            while(dist[this.nodes[i]][n] == undefined || dist[this.nodes[i]][n] == Infinity){
                if (this.nodes[i] === n) dist[this.nodes[i]][n] = 0;
            }
        });
    }
    this.nodes.forEach(i, j, k => {
        if (dist[i][k] + dist[k][j] < dist[i][j])
            dist[i][j] = dist[i][k] + dist[k][j];
    });
    return dist;
}