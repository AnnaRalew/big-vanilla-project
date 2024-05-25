import {addNums, multNums, splitSentence} from "./01";
let a = 1;
let b = 2;
let c = 3;

beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3;
})
    test("Sum should be correct", () => {
        const result1 = addNums(a, b);
        const result2 = addNums(c, b);
        expect(result1).toBe(3);
        expect(result2).toBe(5);
    })

    test("Multiplication should be correct", () => {
        const result1 = multNums(a, b);
    })

    test("Split sentence should be correct", () => {
        const result = splitSentence("Hello, World!")
        console.log(result)
        expect(result[0]).toBe("hello,")
    })


