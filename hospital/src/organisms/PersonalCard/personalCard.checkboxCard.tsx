import './PersonalCard.scss'
import { PersonalCardType } from './PersonalCardType'
import { ReactComponent as Edit } from 'src/public/Edit.svg'
import { Typography } from 'src/Typography'

export const CheckboxCard = ({ patient }: PersonalCardType) => {
  return (
    <div className="personal-card wrapper">
      <div className="personal-card__info">
        <Typography.Body1 className="personal-card__name">
          {patient.first_name} {patient.last_name}
        </Typography.Body1>
        <Typography.Body2 className="personal-card__birthday">
          DOB: {patient.date_of_birth}
        </Typography.Body2>
        <Typography.Body2 className="personal-card__number">
          {patient.phone_number}
        </Typography.Body2>
        <Typography.Body2 className="personal-card__email">{patient.email}</Typography.Body2>
      </div>
      <div className="personal-card__button">
        <Edit />
        <Typography.Button2 className="personal-card__edit">Edit</Typography.Button2>
      </div>
    </div>
  )
}
