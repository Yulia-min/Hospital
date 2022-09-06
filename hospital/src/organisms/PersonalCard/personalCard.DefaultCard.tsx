import './PersonalCard.scss'
import { PersonalCardType } from './PersonalCardType'
import { Typography } from 'src/Typography'
import { Chips } from 'src/atoms'

export const DefaultCard = ({
  first_name,
  last_name,
  date_of_birth,
  phone_number,
  email,
  symptoms,
  comment
}: PersonalCardType) => {
  return (
    <div className="personal-card default-wrapper">
      <div className="personal-card__info">
        <Typography.Body1 className="personal-card__name">
          {first_name} {last_name}
        </Typography.Body1>
        <Typography.Body2 className="personal-card__birthday">
          DOB: {date_of_birth}
        </Typography.Body2>
        <Typography.Body2 className="personal-card__number">{phone_number}</Typography.Body2>
        <Typography.Body2 className="personal-card__email">{email}</Typography.Body2>
      </div>
      <div className="personal-card__symptom-container">
        {symptoms?.map((item) => (
          <Chips.Default className="personal-card__symptom" variant="symptom" children={item} />
        ))}
      </div>
      {comment && (
        <div className="personal-card__comment-container">
          <Typography.Subtitle2 className="personal-card__comment-title">
            Comment
          </Typography.Subtitle2>
          <Typography.Body2 className="personal-card__comment-content">{comment}</Typography.Body2>
        </div>
      )}
    </div>
  )
}
