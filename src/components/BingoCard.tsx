import generateBingoNumbers from '../helpers/generateBingoNumbers'
import './bingo.css'
import type { CSSProperties } from 'react'
import random from '../helpers/random'

interface Props {
  readonly id: `${number}`
  readonly middle: string
  readonly colors: CSSProperties['color'][]
}

export default function BingoCard({ colors, id, middle }: Props) {
  const numbers = generateBingoNumbers({ middle })
  const styles = { color: colors[random({ max: colors.length - 1, min: 0 })] }

  const formatID = (rawID: Props['id']) => {
    if (rawID.length === 1) {
      return `00${rawID}`
    } else if (rawID.length === 2) {
      return `0${rawID}`
    }

    return rawID
  }

  return (
    <article className='bingo' style={styles}>
      <span className='bingo__id'>N° {formatID(id)}</span>
      <header className='bingo__header'>
        <div className='bingo__header-letters'>
          <span>B</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>O</span>
        </div>
      </header>
      <div className='bingo__numbers'>
        {numbers.map((column, columnIndex) => (
          <div className='bingo__column' key={columnIndex}>
            {column.map((number, rowIndex) => (
              <div className='bingo__number' key={`${columnIndex}-${rowIndex}`}>
                {number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  )
}
