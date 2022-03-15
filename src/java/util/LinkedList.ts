import List from "./List";

export default class LinkedList<E> implements List<E> {
  private sizE: number = 0

  size(): number {
    return this.sizE
  }
  isEmpty(): boolean {
    return true
  }
  contains(): boolean {
    return false
  }

}