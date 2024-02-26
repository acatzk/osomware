import React from 'react'

import { IList } from '~/mock/type'

import { ValueItem } from './ValueItem'

type ValueListProps = {
  values: IList[]
}

export const ValueList = ({ values }: ValueListProps): JSX.Element => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:grap-5 xl:gap-8 w-full">
      {values.map((value, i) => (
        <ValueItem key={i} {...value} />
      ))}
    </div>
  )
}
