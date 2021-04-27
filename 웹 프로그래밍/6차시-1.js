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

  getLineToRoot(data, arr) {
    console.log(data, arr);
    arr.push(data);
    if (data <= 1) return arr;

    return this.getLineToRoot(~~(data / 2), arr);
  }
}

function main() {
  const t = new Tree();

  t.root = new Node(1);

  t.root.add(2);
  t.root.add(3);

  t.root.children[0].add(4);
  t.root.children[0].add(5);
  t.root.children[1].add(6);
  t.root.children[1].add(7);

  t.root.children[0].children[0].add(8);
  t.root.children[0].children[0].add(9);
  t.root.children[0].children[1].add(10);
  t.root.children[0].children[1].add(11);

  t.root.children[1].children[0].add(12);
  t.root.children[1].children[0].add(13);
  t.root.children[1].children[1].add(14);
  t.root.children[1].children[1].add(15);

  const node1 = t.root.children[0].children[0].children[0];
  const node2 = t.root.children[0].children[1].children[1];

  const arrNode1 = t.getLineToRoot(node1.data, []);
  const arrNode2 = t.getLineToRoot(node2.data, []);

  let lenNode1 = arrNode1.length - 1;
  let lenNode2 = arrNode2.length - 1;

  while (true) {
    if (arrNode1[lenNode1 - 1] === arrNode2[lenNode2 - 1]) {
      lenNode1--;
      lenNode2--;
    } else {
      break;
    }
  }

  return lenNode1 + lenNode2;
}

main();
