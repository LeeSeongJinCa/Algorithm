class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  BFS(fn) {
    if (this.root === null) return;

    const unvisitedQueue = [this.root];
    while (unvisitedQueue.length !== 0) {
      const current = unvisitedQueue.shift();

      unvisitedQueue.push(...current.children);
      fn(current);
    }
  }
}

function main() {
  const bfsBuffer = [];
  const t = new Tree();

  t.root = new Node("a");
  t.root.add("b");
  t.root.add("d");
  t.root.children[0].add("c");

  t.BFS((node) => bfsBuffer.push(node.data));

  console.log(bfsBuffer);
}

main();
