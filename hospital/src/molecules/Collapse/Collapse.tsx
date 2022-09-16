import classNames from 'classnames'
import './Collapse.scss'
import { Collapse as DefaultCollapse } from 'antd'
import { CollapseType } from './CollapseType'
import { ReactComponent as Arrow } from 'src/public/CollapseArrow.svg'

export const Collapse = ({ panel }: CollapseType) => {
  return (
    <DefaultCollapse
      className="collapse"
      bordered={false}
      expandIcon={({ isActive }) => (
        <Arrow className={classNames('rotate-arrow', { 'rotate-arrow--active': isActive })} />
      )}
    >
      {panel?.map((item) => (
        <DefaultCollapse.Panel header={item.title} key={item.key}>
          <div>{item.children}</div>
        </DefaultCollapse.Panel>
      ))}
    </DefaultCollapse>
  )
}
