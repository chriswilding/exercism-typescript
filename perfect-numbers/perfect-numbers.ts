class PerfectNumbers {
    public static classify(n: number): string {
        if (n < 1) throw new Error('Classification is only possible for natural numbers.')

        const limit = Math.floor(n / 2) + 1

        let sum = 0
        for (let i = 1; i < limit; i++) {
            if (n % i === 0) {
                sum += i
            }
        }

        if (sum === n) return 'perfect'
        if (sum > n) return 'abundant'
        return 'deficient'
    }
}

export default PerfectNumbers
