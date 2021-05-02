export default class Grains {
    public static square(n: number): number {
        if (n < 1 || n > 64) throw new Error()

        return Math.pow(2, n - 1)
    }

    public static total(): number {
        return Math.pow(2, 64)
    }
}
