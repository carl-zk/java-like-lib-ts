export default class PriorityQueue<E> {
  private queue: E[];
  private _size: number;
  private comparator: (u: E, v: E) => number;

  constructor(comparator: (u: E, v: E) => number) {
    this.comparator = comparator;
    this.queue = [];
    this._size = 0;
  }

  public push(e: E): void {
    this.queue.push(e);
    this._size++;
    this.shiftUp(this.parentIndex(this._size));
  }

  private parentIndex(i: number): number {
    return i > 0 ? (i - 1) >> 1 : -1;
  }

  private leftChildIndex(i: number): number {
    return (i << 1) + 1;
  }

  private rightChildIndex(i: number): number {
    return (i + 1) << 1;
  }

  private shiftUp(i: number): void {
    if (i < 0) {
      return;
    }
    let l = this.leftChildIndex(i),
      r = this.rightChildIndex(i);
    let j;
    if (l < this._size && r < this._size) {
      j = this.comparator(this.queue[l], this.queue[r]) < 0 ? l : r;
    } else if (l < this._size) {
      j = l;
    } else {
      j = r;
    }
    if (j < this._size && this.comparator(this.queue[j], this.queue[i]) < 0) {
      this.swap(i, j);
      this.shiftUp(this.parentIndex(i));
    }
  }

  public poll(): E {
    if (this.isEmpty()) {
      return null;
    }
    this.swap(0, this._size - 1);
    let v = this.queue.pop();
    this._size--;
    this.shiftDown(0);
    return v;
  }

  private shiftDown(i: number): void {
    if (i >= this._size) {
      return;
    }
    let l = this.leftChildIndex(i),
      r = this.rightChildIndex(i);
    let j;
    if (l < this._size && r < this._size) {
      j = this.comparator(this.queue[l], this.queue[r]) < 0 ? l : r;
    } else if (l < this._size) {
      j = l;
    } else {
      j = r;
    }
    if (j < this._size && this.comparator(this.queue[j], this.queue[i]) < 0) {
      this.swap(i, j);
      this.shiftDown(j);
    }
  }

  public isEmpty(): boolean {
    return this._size == 0;
  }

  private swap(i: number, j: number): void {
    let x = this.queue[i];
    this.queue[i] = this.queue[j];
    this.queue[j] = x;
  }
}
