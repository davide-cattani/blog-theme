import React from 'react'
import CategoryCard from './CategoryCard'

import { GridWrapper, GridItem } from '../elements'

const SubCategoryList = ({ categories }) => {
  return (
    <GridWrapper cols={1}>
      {categories.map((category) => (
        <GridItem key={category.node.uid}>
          <CategoryCard category={category.node} />
        </GridItem>
      ))}
    </GridWrapper>
  )
}

export default SubCategoryList
