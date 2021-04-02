export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  kind() {
    if (this.sides.some(side => side === 0)) throw new Error('invalid triange')
    const [a, b, c] = this.sides
    if (a + b < c || b + c < a || c + a < b) throw new Error('invalid triange')
    if (a === b && b === c && c === a) return 'equilateral'
    if (a === b || b === c || c === a) return 'isosceles'
    return 'scalene'
  }
}
