import { ICardsState } from '../types/cardsTypes'

export const getCardsInfo = (state: { cards: ICardsState }) => state.cards
export const getRequestDetails = (state: { requestDetails: ICardsState }) => state.requestDetails
