def decode(value: int) -> Dict[str, int]:
    return {
        "A": (value >> 0) & 1,
        "B": (value >> 1) & 1,
        "C": (value >> 2) & 1,
        "D": (value >> 3) & 1,
        "E": (value >> 4) & 1,
        "F": (value >> 5) & 1,
    }
