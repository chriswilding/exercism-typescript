type Color = 'black' | 'brown' |  'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white'

const COLORS: Array<Color> = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export class ResistorColor {
  private colors: Color[]

  constructor(colors: Color[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }
    this.colors = colors
  }

  value(): number {
    const a = COLORS.indexOf(this.colors[0])
    const b = COLORS.indexOf(this.colors[1])
    return (a * 10) + b
  }
}
