import { FC, ReactNode, memo } from 'react'

import classes from './Code.module.scss'

interface CodeProps {
  className?: string
  children?: ReactNode
}

export const Code: FC<CodeProps> = memo((props) => {
  const { children } = props
  return (
    <div className={classes.Code}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
})
