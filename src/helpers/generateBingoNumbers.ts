import random from './random'

export default function generateBingoNumbers({
  middle
}: { middle: string }): (number | string)[][] {
  const numbers: (number | string)[][] = []

  for (let row = 0; row < 5; row += 1) {
    const column: number[] = []

    let min = 0
    let max = 0

    if (row === 0) {
      min = 1
      max = 15
    } else if (row === 1) {
      min = 16
      max = 30
    } else if (row === 2) {
      min = 31
      max = 45
    } else if (row === 3) {
      min = 46
      max = 60
    } else if (row === 4) {
      min = 61
      max = 75
    }

    while (column.length < 5) {
      const randomNumber = random({ max, min })

      if (!column.includes(randomNumber)) {
        column.push(randomNumber)
      }
    }

    numbers.push(column)
  }

  numbers[2][2] = middle
  return numbers
}
