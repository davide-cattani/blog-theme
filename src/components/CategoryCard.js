import React from 'react'
import Img from 'gatsby-image'

import {
  Card,
  OverlayWrapper,
  GatsbyLink,
  TextboxOpaque,
  SubHeading,
} from '../elements'
import styled from 'styled-components'

const CategoryCardWrapper = styled(Card)`
  background-color: ${(props) => props.theme.colors.categoryCard.background};
  height: ${(props) => props.theme.dimensions.categoryCard.normalHeight};
  position: relative;
  text-align: center;

  transition: height ${(props) => props.theme.animations.times.medium} ease;

  &:hover {
    height: ${(props) => props.theme.dimensions.categoryCard.expandedHeight};
  }
`

const CategoryCardHeading = styled(SubHeading)`
  margin: 0;
`

const CategoryCard = ({ category }) => {
  const hasImage =
    category.data.featured_image && category.data.featured_image.fluid

  return (
    <GatsbyLink to={`/category/${category.uid}`}>
      <CategoryCardWrapper>
        {hasImage && (
          <Img
            fluid={category.data.featured_image.fluid}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              zIndex: '0',
            }}
          />
        )}

        <OverlayWrapper>
          <TextboxOpaque>
            <CategoryCardHeading>{category.data.name}</CategoryCardHeading>
          </TextboxOpaque>
        </OverlayWrapper>
      </CategoryCardWrapper>
    </GatsbyLink>
  )
}

export default CategoryCard
