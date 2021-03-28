interface Count {
  [index: string]: number
  A: number
  C: number
  G: number
  T: number
}

class NucleotideCount {
  static nucleotideCounts(strand: string): Count {
    const nucleotides: Count = { A: 0, C: 0, G: 0, T: 0 }
    for (const nucleotide of strand) {
      if (nucleotides[nucleotide] === undefined) {
        throw new Error('Invalid nucleotide in strand')
      }
      nucleotides[nucleotide]++
    }
    return nucleotides
  }
}

export default NucleotideCount
