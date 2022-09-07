import { useState } from 'react'
import { ChooseSymptoms, CreateRequest } from 'src/templates'

export const CreateRequestPage = () => {
  const [step, setStep] = useState<number>(1)
  return (
    <div>
      {step === 1 ? (
        <CreateRequest setStep={setStep} />
      ) : (
        step === 2 && <ChooseSymptoms setStep={setStep} />
      )}
    </div>
  )
}
