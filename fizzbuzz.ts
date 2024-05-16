/**
 * Return array of numbers between **1** and **N** by following the rules:
 *
 * - if number can be divided by 3: replace with **Fizz** ;
 * - if number can be divided by 5: replace with **Buzz** ;
 * - if number can be divided by 3 **AND** 5 : replace with **FizzBuzz** ;
 * - else: the number.
 *
 * @param N : number the upper limit of the list
 */
export const fizzBuzz = (N: number): string[] => {

    if (!N) {
        throw new Error("Invalid parameter");
    }
    if (N < 1) {
        throw new Error("Invalid parameter");
    }
    if (!Number.isInteger(N)) {
        throw new Error("Invalid parameter");
    }

    let answers: string[] = [...Array(N).keys()].map(x => (x + 1).toString()); // Create array ["1", ... , "N"]
    return answers.map((answer: string): string => {
        const i: number = +answer;
        answer = "";

        if (fizz(i)) {
            answer += "Fizz";
        }

        if (buzz(i)) {
            answer += "Buzz";
        }

        // Just add new case here if needed, example :
        // if (fazz(i)) {
        //     answer += "Fazz";
        // }

        if (answer === "") {
            answer = i.toString()
        }

        return answer;
    })
}

const fizz = (N: number): boolean => isMultipleOf(N, 3);
const buzz = (N: number): boolean => isMultipleOf(N, 5);
// const fazz = (N: number): boolean => isMultipleOf(N, 7);

const isMultipleOf = (N: number, K: number): boolean => N % K === 0;
