export abstract class BaseTest {

    public abstract runAllTests(): void;

    public should(value: any): any {
        return { be: function (expected: any): boolean {
            const equal: boolean = value == expected;
            if (!equal)
                console.error(`Test failed: expected ${expected} but was ${value}`);
            return equal;
        }};
    }
}