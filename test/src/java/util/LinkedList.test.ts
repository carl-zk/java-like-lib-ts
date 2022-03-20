import { suite, test } from "@testdeck/mocha";
import { mock, instance } from "ts-mockito";
import * as assert from "assert";
import Objects from "../../../../src/java/util/Objects";
import Object_ from "../../../../src/java/lang/Object_";
import Number_ from "../../../../src/java/lang/Number_";
import LinkedList from "../../../../src/java/util/LinkedList";

@suite
class LinkedListTest {
  @test
  "create LinkedList"() {
    let arr = [1, 2, 3, 4, 5];
    let ll = new LinkedList<Number_>();
    for (let x of arr) {
      ll.addLast(new Number_(x));
    }

    assert.equal(ll.size(), 5);

    ll.addLast(new Number_(6));

    while (!ll.isEmpty()) {
      console.log(ll.pollFirst().v);
    }
  }
}
