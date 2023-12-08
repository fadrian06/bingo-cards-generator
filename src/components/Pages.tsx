import BingoCard from './BingoCard'
import { useRef } from 'react'
import { colors, bingoSymbol } from '../consts'
import Page from './Page'

export default function Pages() {
  const counter = useRef(1)

  const totalCards = 252
  // const totalCards = 12
  const totalPages = Math.ceil(totalCards / 6)
  const pages: React.JSX.Element[] = []

  for (let page = 1; page <= totalPages; page += 1) {
    const cards: React.JSX.Element[] = []

    for (let card = 1; card <= 6; card += 1) {
      if (counter.current > totalCards) {
        break
      }

      cards.push(
        <BingoCard
          colors={colors}
          id={`${counter.current}`}
          key={counter.current}
          middle={bingoSymbol}
        />
      )

      counter.current += 1
    }

    pages.push(<Page key={page}>{cards}</Page>)
  }

  return pages
}
