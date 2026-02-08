class SubitEncoder:
    """
    Technical 6‑bit SUBIT state encoder.

    Bit layout:
      bit0 = A (Perception)
      bit1 = B (Evaluation)
      bit2 = C (Intention)
      bit3 = D (Planning)
      bit4 = E (Action)
      bit5 = F (Feedback)

    Input:
      axes: dict with keys "A"…"F", values 0 or 1

    Output:
      integer in range 0–63
    """

    def encode(self, axes: dict) -> int:
        bits = [
            axes.get("A", 0),
            axes.get("B", 0),
            axes.get("C", 0),
            axes.get("D", 0),
            axes.get("E", 0),
            axes.get("F", 0),
        ]

        value = 0
        for i, b in enumerate(bits):
            value |= (b & 1) << i
        return value
