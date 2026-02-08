import { encode, decode, FSM } from "./subit64ts";

const value = encode({ A: 1, B: 0, C: 1, D: 0, E: 0, F: 1 });
console.log("Encoded:", value);

const axes = decode(value);
console.log("Decoded:", axes);

const fsm = new FSM({ 37: { act: 41 } });
const nextState = fsm.next(value, "act");
console.log("Next state:", nextState);
