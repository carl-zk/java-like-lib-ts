import Object_ from "../lang/Object_";
import List from "./List";

export default class LinkedList<E extends Object_> implements List<E> {
  private _size: number;
  private head: Node<E>;
  private tail: Node<E>;

  constructor() {
    this._size = 0;
    this.head = null;
    this.tail = null;
  }

  public size(): number {
    return this._size;
  }
  public isEmpty(): boolean {
    return this.head == null;
  }
  public contains(e: E): boolean {
    let p = this.head;
    if (e == null) {
      while (p != null) {
        if (p.v == null) return true;
        p = p.next;
      }
    } else {
      while (p != null) {
        if (e.equals(p.v)) return true;
        p = p.next;
      }
    }
    return false;
  }

  public peek(): E {
    return this.head ? this.head.v : null;
  }

  public pollFirst(): E {
    if (this.isEmpty()) {
      return null;
    }
    let v = this.head.v;
    this.free(this.head);
    this._size--;
    return v;
  }

  private free(nd: Node<E>) {
    const p = nd.pre,
      q = nd.next;
    nd.pre = null;
    nd.next = null;
    if (p) {
      p.next = q;
    }
    if (q) {
      q.pre = p;
    }
    if (nd == this.head) {
      this.head = q;
    }
    if (nd == this.tail) {
      this.tail = p;
    }
  }

  public pollLast(): E {
    if (this.isEmpty()) {
      return null;
    }
    let v = this.tail.v;
    this.free(this.tail);
    this._size--;
    return v;
  }

  public addFirst(v: E): void {
    let nd = new Node(v);
    this._size++;
    if (this.head == null) {
      this.head = this.tail = nd;
    } else {
      nd.next = this.head;
      this.head.pre = nd;
      this.head = nd;
    }
  }

  public addLast(v: E): void {
    let nd = new Node(v);
    this._size++;
    if (this.head == null) {
      this.head = this.tail = nd;
    } else {
      nd.pre = this.tail;
      this.tail.next = nd;
      this.tail = nd;
    }
  }
}

export class Node<E> {
  public v: E;
  public pre: Node<E>;
  public next: Node<E>;

  constructor(v: E) {
    this.v = v;
    this.pre = null;
    this.next = null;
  }
}
