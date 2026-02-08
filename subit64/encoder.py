def encode(axes: Dict[str, int]) -> int:
    bits = [
        axes.get("A", 0),
        axes.get("B", 0),
        axes.get("C", 0),
        axes.get("D", 0),
        axes.get("E", 0),
        axes.get("F", 0),
    ]
    return sum(bit << i for i, bit in enumerate(bits))
