import './PersonalCard.scss'
import { PersonalCardType } from './PersonalCardType'
import { Typography } from 'src/Typography'
import { Chips } from 'src/atoms'

import { ReactComponent as Arrow } from 'src/public/CollapseArrow.svg'

export const DefaultCard = ({ patient, isArrow = false }: PersonalCardType) => {
  return (
    <div className="personal-card default-wrapper">
      <div className="personal-card__info">
        <div className="personal-card__name-container">
          <Typography.Body1 className="personal-card__name">
            {patient.first_name} {patient.last_name}
          </Typography.Body1>
          {isArrow && <Arrow className="rotate-arrow" />}
        </div>
        <Typography.Body2 className="personal-card__birthday">
          DOB: {patient.date_of_birth}
        </Typography.Body2>
        <Typography.Body2 className="personal-card__number">
          {patient.phone_number}
        </Typography.Body2>
        <Typography.Body2 className="personal-card__email">{patient.email}</Typography.Body2>
      </div>
      <div className="personal-card__symptom-container">
        {patient.symptoms?.map((item) => (
          <Chips.Default className="personal-card__symptom" variant="symptom" children={item} />
        ))}
      </div>
      {patient.comment && (
        <div className="personal-card__comment-container">
          <Typography.Subtitle2 className="personal-card__comment-title">
            Comment
          </Typography.Subtitle2>
          <Typography.Body2 className="personal-card__comment-content">
            {patient.comment}
          </Typography.Body2>
        </div>
      )}
    </div>
  )
}
