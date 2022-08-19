import classNames from 'classnames'
import './Status.scss'
import { StatusType } from './StatusType'

export const Status = ({ variant, type, children }: StatusType) => {
  return <div className={classNames('status', type, variant)}>{children}</div>
}
