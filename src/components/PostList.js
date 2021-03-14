import React from 'react'
import PostCard from './PostCard'

import { GridWrapper, GridItem } from '../elements'


const PostList = ({ posts, cols=1, list }) => {
  return (
    <GridWrapper cols={cols}>
      {posts.map((post) => (
        <GridItem key={!list ? post.node.uid : post.uid}>
          {!list && <PostCard post={post.node} />}
          {list && <PostCard post={post} listItem />}
        </GridItem>
      ))}
    </GridWrapper>
  )
}

export default PostList
