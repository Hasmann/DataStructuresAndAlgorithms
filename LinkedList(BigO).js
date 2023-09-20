console.log("Hello world");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.next = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    this.head = this.head.next;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.next = null;
    }
    this.length--;
    return this;
  }
  get(index) {
    let pres = this.head;
    let Node;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        Node = pres;
      }
      pres = this.head.next;
    }
    return Node;
  }
  set(index, value) {
    let Node = this.get(index);
    if (Node) {
      Node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    let prev = this.get(index - 1);
    let pres = this.get(index);
    prev.next = pres.next;
    pres.next = null;
    this.length--;
    return true;
  }
  /////
}

const LL = new LinkedList(4);
LL.push(8);
