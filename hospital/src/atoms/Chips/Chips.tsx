import classNames from 'classnames'
import './Chips.scss'
import { ChipsType } from './ChipsType'

export const Chips = ({ variant, children }: ChipsType) => {
  return <span className={classNames('chips', variant)}>{children}</span>
}
