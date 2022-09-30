import { Tabs } from 'antd'
import { useEffect } from 'react'
import { Button } from 'src/atoms'
import { Header } from 'src/molecules'
import { PersonalCard } from 'src/organisms'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getPatientInfo } from 'src/redux/patients/actions'
import { getCurrentPatient } from 'src/redux/patients/selectors'
import { Typography } from 'src/Typography'
import './Profile.scss'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const uuid = localStorage.getItem('uuid') as string
  const { currentPatient } = useAppSelector(getCurrentPatient)

  useEffect(() => {
    dispatch(getPatientInfo(uuid))
  }, [uuid])

  return (
    <div className="profile">
      <Header.VisitsPage />
      <div className="profile__content-wrapper">
        <Tabs defaultActiveKey="1" className="profile__tabs">
          <Tabs.TabPane tab="Profile" key="1">
            <Typography.Button2 className="profile__title profile__card-title-wrapper">
              Profile
            </Typography.Button2>
            {currentPatient && (
              <PersonalCard
                className="profile__personal-card-container"
                patient={currentPatient}
                isShowEdit={true}
                isDefault={true}
                isHomeAddress={true}
              />
            )}
            <Typography.Button2 className="profile__title profile__payment-title-wrapper">
              Payment Method
            </Typography.Button2>
            <div className="profile__add-button-container">
              <Button.Default variant="primary" className="profile__add-button">
                <Typography.Button2>Add</Typography.Button2>
              </Button.Default>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="List Of Patients" key="2" />
        </Tabs>
      </div>
    </div>
  )
}
