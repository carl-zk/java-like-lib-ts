import Object_ from "../lang/Object_";

export default interface List<T extends Object_> {
  size(): number;
  isEmpty(): boolean;
  contains(e: T): boolean;
}
