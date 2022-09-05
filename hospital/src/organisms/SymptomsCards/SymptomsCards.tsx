import { Typography } from 'src/Typography'
import './SymptomsCards.scss'
import { SymptomsCardsType } from './SymptomsCardsType'

export const SymptomsCards = ({ image, name }: SymptomsCardsType) => {
  return (
    <div className="symptoms-cards">
      <img className="symptoms-cards__image" src={image} alt={name} />
      <Typography.Body1 className="symptoms-cards__name">{name}</Typography.Body1>
    </div>
  )
}
