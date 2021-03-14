import React from 'react'

import { Hero, BigHeading, SubHeading } from '../elements'

const CategoryPageHeader = ({ heading, subheading }) => {
  if (!heading) {
    return null
  }

  return (
    <Hero xSmall>
      <div>
        <BigHeading>{heading}</BigHeading>
        <SubHeading>{subheading}</SubHeading>
      </div>
    </Hero>
  )
}

export default CategoryPageHeader
