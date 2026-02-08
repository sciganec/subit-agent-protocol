export class SubitDecoder {
  /**
   * Technical 6‑bit SUBIT state decoder.
   *
   * Bit layout:
   *   bit0 = A (Perception)
   *   bit1 = B (Evaluation)
   *   bit2 = C (Intention)
   *   bit3 = D (Planning)
   *   bit4 = E (Action)
   *   bit5 = F (Feedback)
   *
   * Input:
   *   value: number in range 0–63
   *
   * Output:
   *   { A:0|1, B:0|1, C:0|1, D:0|1, E:0|1, F:0|1 }
   */
  decode(value: number): Record<string, number> {
    return {
      A: (value >> 0) & 1,
      B: (value >> 1) & 1,
      C: (value >> 2) & 1,
      D: (value >> 3) & 1,
      E: (value >> 4) & 1,
      F: (value >> 5) & 1
    };
  }
}
