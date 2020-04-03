import { NumerousTest } from "./numerous.test";
import { BaseTest } from "./base.test";
import { MapperTest } from "./mapper.test";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class Test extends BaseTest {

    private _numerousTest: NumerousTest;
    private _mapperTest: MapperTest;

    public constructor(numerousTest: NumerousTest, mapperTest: MapperTest) {
        super();
        this._numerousTest = numerousTest;
        this._mapperTest = mapperTest;
    }

    public runAllTests() {
        this._numerousTest.runAllTests();
        this._mapperTest.runAllTests();
    }
}