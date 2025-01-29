import { FC, PropsWithChildren, ReactNode, memo } from 'react'

import classes from './Code.module.scss'

export interface CodeProps extends PropsWithChildren {
  className?: string
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
