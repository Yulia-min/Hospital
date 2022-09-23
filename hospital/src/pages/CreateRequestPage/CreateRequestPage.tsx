import { useState } from 'react'
import { BookingRequest, ChooseAddress, ChooseSymptoms, CreateRequest } from 'src/templates'

export const CreateRequestPage = () => {
  const [step, setStep] = useState<number>(1)
  return (
    <div>
      {step === 1 ? (
        <CreateRequest setStep={setStep} step={step} />
      ) : step === 2 ? (
        <ChooseSymptoms setStep={setStep} step={step} />
      ) : step === 3 ? (
        <ChooseAddress setStep={setStep} step={step} />
      ) : (
        step === 5 && <BookingRequest setStep={setStep} step={step} />
      )}
    </div>
  )
}
