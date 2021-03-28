class NucleotideCount {
  static nucleotideCounts(strand: string) {

    const nucleotides = new Map([['A', 0], ['C', 0], ['G', 0], ['T', 0]])

    for (const nucleotide of strand) {
      if (nucleotides.has(nucleotide)) {
        const count = nucleotides.get(nucleotide) || 0
        nucleotides.set(nucleotide, count + 1)
      } else {
        throw new Error('Invalid nucleotide in strand')
      }
    }

    return Object.fromEntries(nucleotides)
  }
}

export default NucleotideCount
