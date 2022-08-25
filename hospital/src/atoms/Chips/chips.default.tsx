import classNames from 'classnames'
import './chips.default.scss'
import { ChipsType } from './ChipsType'

export const Default = ({ variant, children, className }: ChipsType) => {
  return <span className={classNames('chips', variant, className)}>{children}</span>
}
