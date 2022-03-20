import Objects from "../util/Objects";

export default class Object_ {
  protected hashcode: number;

  public hashCode(): number {
    if (!this.hashcode) {
      this.hashcode = Objects.hashCode(this);
    }
    return this.hashcode;
  }

  public equals(o: Object_): boolean {
    return this == o;
  }
}
