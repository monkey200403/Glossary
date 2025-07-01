import React from 'react'
import { Second } from './Second'

export const First = ({conent}) => {
  return (
    <div>First - {conent}
        <Second></Second>
    </div>
  )
}
