import { BaseTest, Testee } from "./base.test";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class TesteeTest extends BaseTest {

    public runAllTests() {
        this.test_shouldBe_simpleString();
        this.test_shouldBe_simpleNumber();
        this.test_shouldNotBe_simpleNumber();
        this.test_shouldBe_simpleObject();
    }

    public test_shouldBe_simpleString() {
        const value = "Test";
        const testee = new Testee(value);
        testee.should().be(value);
    }

    public test_shouldBe_simpleNumber() {
        const value = 10;
        const testee = new Testee(value);
        testee.should().be(value);
    }

    public test_shouldNotBe_simpleNumber() {
        const value = 10;
        const testee = new Testee(value);
        testee.should().notBe("10");
    }

    public test_shouldBe_simpleObject() {
        const value = {
            pNumber: 20,
            pString: "ObjTest"
        };
        const testee = new Testee(value);

        testee.should().be(value);
        testee.should("pNumber").be(value.pNumber);
        testee.should("pString").be(value.pString);
    }
}