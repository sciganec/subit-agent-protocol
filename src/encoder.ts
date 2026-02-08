export class SubitEncoder {
  /**
   * Technical 6‑bit SUBIT state encoder.
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
   *   axes: { A:0|1, B:0|1, C:0|1, D:0|1, E:0|1, F:0|1 }
   *
   * Output:
   *   number in range 0–63
   */
  encode(axes: Record<string, number>): number {
    const bits = [
      axes["A"] ?? 0,
      axes["B"] ?? 0,
      axes["C"] ?? 0,
      axes["D"] ?? 0,
      axes["E"] ?? 0,
      axes["F"] ?? 0
    ];

    let value = 0;
    for (let i = 0; i < bits.length; i++) {
      value |= (bits[i] & 1) << i;
    }
    return value;
  }
}
