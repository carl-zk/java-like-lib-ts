import Object_ from "../lang/Object_";

export default class Objects {
  static INT_MAX_VALUE = (1 << 31) - 1;

  public static hashCode(o: Object_): number;
  public static hashCode(a: Object_[]): number;

  public static hashCode(a: any): number {
    if (a == null) {
      return 0;
    }

    let result = 0;

    if (a instanceof Object_) {
      let str = JSON.stringify(a);
      for (let i = 0; i < str.length; i++) {
        result = (31 * result + Number(str.charCodeAt(i))) & this.INT_MAX_VALUE;
      }
    } else {
      for (let o of a) {
        let str = JSON.stringify(o);
        for (let i = 0; i < str.length; i++) {
          result =
            (31 * result + Number(str.charCodeAt(i))) & this.INT_MAX_VALUE;
        }
      }
    }

    return result;
  }
}
