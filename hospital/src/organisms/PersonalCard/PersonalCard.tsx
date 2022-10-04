import { Typography } from 'src/Typography'
import { PersonalCardType } from './PersonalCardType'
import { ReactComponent as Edit } from 'src/public/Edit.svg'
import { ReactComponent as Avatar64 } from 'src/public/Avatar64.svg'
import './PersonalCard.scss'
import { Chips } from 'src/atoms'
import React from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

export const PersonalCard = ({
  patient,
  isShowEdit,
  isChecbox,
  isDefault,
  className,
  isHomeAddress,
  comment,
  symptoms
}: PersonalCardType) => {
  const navigate = useNavigate()

  const editPatientClick = (patientId: string) => () => {
    navigate(`/edit-profile/${patientId}`)
  }
  return (
    <div
      className={cn(
        'personal-card',
        {
          'personal-card__checkbox-wrapper': isChecbox,
          'personal-card__default-wrapper': isDefault
        },
        className
      )}
    >
      <div
        className={cn({
          'personal-card__info-wrapper': isDefault
        })}
      >
        <div className="personal-card__content-wrapper">
          <Avatar64 />
          <div className="personal-card__info">
            <div className="personal-card__name-container">
              <Typography.Body1 className="personal-card__name">
                {patient.first_name} {patient.last_name}
              </Typography.Body1>
              {isShowEdit && (
                <div className="personal-card__button" onClick={editPatientClick(patient.uuid)}>
                  <Edit />
                  <Typography.Button2 className="personal-card__edit">Edit</Typography.Button2>
                </div>
              )}
            </div>
            <Typography.Body2 className="personal-card__birthday">
              DOB: {patient.date_of_birth}
            </Typography.Body2>
            <Typography.Body2 className="personal-card__number">
              {patient.phone_number}
            </Typography.Body2>
            <Typography.Body2 className="personal-card__email">{patient.email}</Typography.Body2>
            {isHomeAddress && (
              <Typography.Body2 className="personal-card__address">
                {patient.home_address?.address_line}
              </Typography.Body2>
            )}
          </div>
        </div>
      </div>
      <div className="personal-card__symptom-container">
        {symptoms?.map((item, index) => (
          <React.Fragment key={index}>
            <Chips.Default className="personal-card__symptom" variant="symptom" children={item} />
          </React.Fragment>
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
