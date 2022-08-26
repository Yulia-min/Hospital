import classNames from 'classnames'
import './chips.interactive.scss'
import { ReactComponent as Cross } from 'src/public/Cross.svg'
import { ChipsType } from './ChipsType'

export const Interactive = ({ children, className, onClick }: ChipsType) => {
  return (
    <div className={classNames('chips', 'interactive', className)}>
      <span>{children}</span>
      <span className="chips-cross" onClick={onClick}>
        <Cross />
      </span>
    </div>
  )
}
