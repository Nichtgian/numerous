import { Injectable } from "../helper/injection/injectable.decorator";
import { TesteeTest } from "./testee.test";
import { NumerousTest } from "./numerous.test";
import { MapperTest } from "./mapper.test";
import { BaseTest } from "./base.test";

@Injectable()
export class Test extends BaseTest {

    private _testeeTest: TesteeTest;
    private _numerousTest: NumerousTest;
    private _mapperTest: MapperTest;

    public constructor(testeeTest: TesteeTest, numerousTest: NumerousTest, mapperTest: MapperTest) {
        super();
        this._testeeTest = testeeTest;
        this._numerousTest = numerousTest;
        this._mapperTest = mapperTest;
    }

    public runAllTests() {
        this._testeeTest.runAllTests();
        this._numerousTest.runAllTests();
        this._mapperTest.runAllTests();
    }
}