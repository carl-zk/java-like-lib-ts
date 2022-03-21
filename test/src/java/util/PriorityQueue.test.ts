import { suite, test } from "@testdeck/mocha";
import { mock, instance } from "ts-mockito";
import * as assert from "assert";
// import PriorityQueue from "../../../../src/java/util/PriorityQueue";

import { PriorityQueue } from '../../../../src/index'

@suite
class PriorityQueueTest {
  @test
  "asc PriorityQueue"() {
    let arr = [1, 4, 5, 2, 3];
    let exp = [1, 2, 3, 4, 5];
    let pq = new PriorityQueue((a: number, b: number) => a - b);
    for (let x of arr) {
      pq.push(x);
    }
    for (let x of exp) {
      assert.equal(pq.poll(), x);
    }
  }

  @test
  "desc PriorityQueue"() {
    let arr = [1, 4, 5, 2, 3];
    let exp = [5, 4, 3, 2, 1];
    let pq = new PriorityQueue((a: number, b: number) => b - a);
    for (let x of arr) {
      pq.push(x);
    }
    for (let x of exp) {
      assert.equal(pq.poll(), x);
    }
  }
}
