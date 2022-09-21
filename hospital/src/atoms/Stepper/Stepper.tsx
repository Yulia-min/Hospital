import './Stepper.scss'
import { StepperType } from './StepperType'

export const Stepper = ({ step, strokeDasharray }: StepperType) => {
  return (
    <svg viewBox="0 0 35 40" className="stepper">
      <circle cx="13" cy="11" r="15.91549430918954" fill="#fff" />
      <circle
        cx="17"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#d2d3d4"
        strokeWidth="2"
      />
      <circle
        cx="17"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="darkblue"
        strokeWidth="2"
        strokeDasharray={strokeDasharray}
        strokeDashoffset="25"
      />
      <g>
        <text x="18%" y="60%" fill="darkblue">
          {step} of
        </text>
        <text x="63%" y="60%" fill="gray">
          5
        </text>
      </g>
    </svg>
  )
}
