export function encode(axes: Record<string, number>): number {
  const bits = [
    axes.A ?? 0,
    axes.B ?? 0,
    axes.C ?? 0,
    axes.D ?? 0,
    axes.E ?? 0,
    axes.F ?? 0
  ];
  return bits.reduce((acc, bit, i) => acc + (bit << i), 0);
}
