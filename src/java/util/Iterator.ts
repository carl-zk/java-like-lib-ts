export default interface Iterator<E> {
  hasNext(): boolean;
  next(): E;
  default remove(): void {
    throw new Error('UnsupportedOperationException')
  }
  default function forEachRemaining( consumer: (e)=> void) {
      while(this.hasNext()) {
        consumer(this.next())
      }
  }
}