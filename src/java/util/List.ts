export default interface List<T> {
  size(): number;
  isEmpty(): boolean;
  contains(): boolean;
}