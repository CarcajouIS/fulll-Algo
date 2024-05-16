import process from "process";
import {fizzBuzz} from "./fizzbuzz";

function main(...args: any[]) {
    const [caller, callee, ...numbers] = args[0];
    for (const N of numbers) {
        console.log(...fizzBuzz(N));
    }
}

main(process.argv);
