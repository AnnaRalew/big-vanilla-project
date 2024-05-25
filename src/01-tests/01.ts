
export const splitSentence = (snt: string) => {
    return snt.toLowerCase()
        .replace("!", "")
        .split(" ")
}

export const addNums = (a: number, b :number) => {
    return a + b;
}

export const multNums = (a: number, b:number) => {
    return a * b
}