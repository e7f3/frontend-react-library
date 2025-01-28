import { FC, memo } from 'react'

import { classNames } from 'shared/lib/utils/classNames/classNames'

import classes from './Skeleton.module.scss'
import { Card, CardTheme } from '../Card/Card'

export enum SkeletonPurpose {
  'ARTICLE' = 'article',
  'GRID_ARTICLES' = 'gridArticles',
  'LIST_ARTICLES' = 'listArticles',
  'PROFILE' = 'profile',
}

interface SkeletonProps {
  purpose?: SkeletonPurpose
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  const { purpose = SkeletonPurpose.ARTICLE } = props

  switch (purpose) {
    case SkeletonPurpose.ARTICLE:
      return (
        <div className={classNames(classes.Skeleton)}>
          <div className={classes.SkeletonHeader}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonHeaderImage,
              ])}
            />
            <div className={classes.SkeletonHeaderInfo}>
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderTitle,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderSubtitle,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderViews,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderDate,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonHeaderTags,
                ])}
              />
            </div>
          </div>
          <div className={classes.SkeletonBody}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />{' '}
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonBodyLine,
              ])}
            />
          </div>
        </div>
      )
    case SkeletonPurpose.GRID_ARTICLES:
      return (
        <div
          className={classNames(classes.Skeleton, {}, [
            classes.SkeletonArticles,
            classes[purpose],
          ])}
        >
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
        </div>
      )
    case SkeletonPurpose.LIST_ARTICLES:
      return (
        <div
          className={classNames(classes.Skeleton, {}, [
            classes.SkeletonArticles,
            classes[purpose],
          ])}
        >
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardImage,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardImage,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardImage,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardImage,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardImage,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
          <Card className={classes.SkeletonCard}>
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardTitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardSubtitle,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardImage,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardText,
              ])}
            />
            <div
              className={classNames(classes.SkeletonElement, {}, [
                classes.SkeletonCardButton,
              ])}
            />
          </Card>
        </div>
      )
    case SkeletonPurpose.PROFILE:
      return (
        <div className={classNames(classes.Skeleton)}>
          <Card className={classes.SkeletonCard}>
            <div className={classes.SkeletonProfile}>
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonProfileAvatar,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonProfileInput,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonProfileInput,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonProfileInput,
                ])}
              />
              <div
                className={classNames(classes.SkeletonElement, {}, [
                  classes.SkeletonProfileInput,
                ])}
              />
            </div>
          </Card>
        </div>
      )
    default:
      return null
  }
})
