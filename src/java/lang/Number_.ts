import Object_ from "./Object_";

export default class Number_ extends Object_ {
  v: number;

  constructor(v: number) {
    super();
    this.v = v;
  }

  public equals(other: Object_): boolean {
    if (other == null || !(other instanceof Number_)) {
      return false;
    }
    if (other == this) {
      return true;
    }
    return this.v == other.v;
  }
}
