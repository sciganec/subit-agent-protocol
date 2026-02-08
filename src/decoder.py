class SubitDecoder:
    """
    Technical 6‑bit SUBIT state decoder.

    Bit layout:
      bit0 = A (Perception)
      bit1 = B (Evaluation)
      bit2 = C (Intention)
      bit3 = D (Planning)
      bit4 = E (Action)
      bit5 = F (Feedback)

    Input:
      value: integer in range 0–63

    Output:
      dict with keys "A"…"F", values 0 or 1
    """

    def decode(self, value: int) -> dict:
        return {
            "A": (value >> 0) & 1,
            "B": (value >> 1) & 1,
            "C": (value >> 2) & 1,
            "D": (value >> 3) & 1,
            "E": (value >> 4) & 1,
            "F": (value >> 5) & 1,
        }
