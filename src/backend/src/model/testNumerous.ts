import { Card } from "./numerous/card";
import { Numerous } from "./numerous/numerous";

export class TestNumerous {

    static runAllTests() {
        TestNumerous.test_Numerous_IsCardPlayable();
    }

    static test_Numerous_IsCardPlayable() {
        const suits = Numerous.suits;
        const ranks = Numerous.ranks;

        const tests = [
            {
                card: new Card(suits[0], ranks[3]),
                stack: [
                    new Card(suits[0], ranks[3]),
                    new Card(suits[0], ranks[3])
                ],
                expectedResult: true
            },
            {
                card: new Card(suits[0], ranks[3]),
                stack: [
                    new Card(suits[0], ranks[3]),
                    new Card(suits[0], ranks[4])
                ],
                expectedResult: false
            },
            {
                card: new Card(suits[0], ranks[5]),
                stack: [
                    new Card(suits[0], ranks[5])
                ],
                expectedResult: true
            },
            {
                card: new Card(suits[0], ranks[5]),
                stack: [
                    new Card(suits[0], ranks[4])
                ],
                expectedResult: false
            },
            {
                card: new Card(suits[0], ranks[5]),
                stack: [
                    new Card(suits[0], ranks[7])
                ],
                expectedResult: true
            },
            {
                card: new Card(suits[0], ranks[0]),
                stack: [
                    new Card(suits[0], ranks[7])
                ],
                expectedResult: true
            },
            {
                card: new Card(suits[0], ranks[1]),
                stack: [
                    new Card(suits[0], ranks[10])
                ],
                expectedResult: true
            },
            {
                card: new Card(suits[0], ranks[6]),
                stack: [
                    new Card(suits[0], ranks[10])
                ],
                expectedResult: false
            }
        ];

        tests.forEach(test => {
            const result = Numerous.isCardPlayable(test.card, test.stack);

            if (result != test.expectedResult) {
                console.error("Test failed: test_Numerous_IsCardPlayable Expected(" + test.expectedResult + ") but Result(" + result + ")");
                console.error(test);
                console.error(test.stack[test.stack.length - 1]);
            }
        });
    }
}