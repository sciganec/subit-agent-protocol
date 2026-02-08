import { SubitEncoder } from "./src/encoder";
import { SubitDecoder } from "./src/decoder";
import { SubitFSM } from "./src/fsm";

// Initial SUBIT‑64 axes (A–F)
const axes = { A: 1, B: 0, C: 1, D: 0, E: 0, F: 1 };

const encoder = new SubitEncoder();
const decoder = new SubitDecoder();

// Encode → 6‑bit integer
const value = encoder.encode(axes);

// Decode back into phase flags
const decoded = decoder.decode(value);

// FSM transitions
const transitions: Record<number, Record<string, number>> = {
  37: {
    observe: 5,
    act: 41
  }
};

const fsm = new SubitFSM(transitions);

// Apply an event
const nextState = fsm.next(value, "act");

// Serialize result
const payload = {
  state: { value },
  next_state: { value: nextState },
  decoded
};

console.log(JSON.stringify(payload, null, 2));
