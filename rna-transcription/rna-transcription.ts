const rnaToDna = new Map([
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'U'],
  ['T', 'A']
])

class Transcriptor {
  toRna(dna: string): string {
    const rna: string[] = []
    for (const base of dna) {
      if (!rnaToDna.has(base)) {
        throw new Error('Invalid input DNA.')
      }
      rna.push(rnaToDna.get(base)!)
    }
    return rna.join('')
  }
}

export default Transcriptor
