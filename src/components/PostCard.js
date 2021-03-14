import React, { useState } from 'react'
import Img from 'gatsby-image'
import theme from '../../config/theme'
import { Link } from 'gatsby'
import { BiMap } from 'react-icons/bi'

import {
  Card,
  CardContent,
  GatsbyLink,
  PostCardTitle,
  Tag,
  DividerWithText,
} from '../elements'

const EXCERPT_LENGTH = 220

const PostCard = ({ post, listItem }) => {
  const [postData, setPostData] = useState(listItem ? post : post.data)
  const [excerpt, setExcerpt] = useState(
    postData.description.substring(0, EXCERPT_LENGTH) + '…'
  )

  return (
    <Card>
      {!listItem && postData.featured_image && (
        <Link to={`/post/${post.uid}`}>
          <Img
            fluid={postData.featured_image.fluid}
            style={{ maxHeight: theme.dimensions.postCard.height }}
          />
        </Link>
      )}
      <CardContent>
        {!listItem &&
          !!postData.categories &&
          !!postData.categories.length > 0 && (
            <div className='tags'>
              {postData.categories.map((cat, i) => {
                return (
                  cat.category &&
                  cat.category.document && (
                    <Tag
                      isSmall
                      key={i}
                      to={`/category/${cat.category.document.uid}`}
                    >
                      {cat.category.document.data.name}
                    </Tag>
                  )
                )
              })}
            </div>
          )}

        <GatsbyLink aria-label={postData.title} to={`/post/${post.uid}`}>
          <PostCardTitle>{postData.title}</PostCardTitle>
          {postData.destination && (
            <p className='has-text-secondary'>
              <BiMap size={'1.1em'} /> {postData.destination}
            </p>
          )}
          <p>{excerpt}</p>
          <DividerWithText>{postData.date}</DividerWithText>
        </GatsbyLink>
      </CardContent>
    </Card>
  )
}

export default PostCard
