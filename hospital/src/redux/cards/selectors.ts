import { ICardsState } from '../types/cardsTypes'

export const getCardsInfo = (state: { cards: ICardsState }) => state.cards
