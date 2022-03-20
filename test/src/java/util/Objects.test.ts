import { suite, test } from "@testdeck/mocha";
import * as assert from "assert";
import Objects from "../../../../src/java/util/Objects";
import Object_ from "../../../../src/java/lang/Object_";

@suite
class ObjectsTest {
  @test
  "object & array"() {
    let o: Object_ = new Object_();
    let hash = Objects.hashCode(o);
    assert.equal(hash, 3938);
    let p: Object_[] = [new Object_(), new Object_()];
    let hashp = Objects.hashCode(p);
    assert.equal(hashp, 3788356);
  }
}
