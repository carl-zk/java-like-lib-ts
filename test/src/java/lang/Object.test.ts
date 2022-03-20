import { suite, test } from "@testdeck/mocha";
import { mock, instance } from "ts-mockito";
import * as assert from "assert";
import Objects from "../../../../src/java/util/Objects";
import Object_ from "../../../../src/java/lang/Object_";

@suite
class ObjectTest {
  @test
  "equals overide"() {
    let u1 = new User("a", 1);
    let u2 = new User("a", 1);

    assert.notEqual(u1, u2);
    assert.ok(u1.equals(u2));
  }
}

class User extends Object_ {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  public equals(other: Object_): boolean {
    if (other == null || !(other instanceof User)) {
      return false;
    }
    if (this == other) {
      return true;
    }
    return this.name == other.name && this.age == other.age;
  }
}
