import React from 'react'

import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

import {
  PaginationWrapper,
  PaginationList,
  PaginationLink,
  CenteredBox,
} from '../elements'

const PostPagination = ({ currentPage, pageCount, base }) => {
  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    const isCurrent = currentPage === i
    pages.push(
      <PaginationLink
        key={i}
        isCurrent={isCurrent}
        aria-label={'Vai a pagina' + i}
        aria-current={isCurrent ? 'page' : ''}
        to={'/page-' + i}
      >
        {i}
      </PaginationLink>
    )
  }

  return (
    <>
      <PaginationWrapper
        isSmall={true}
        role='navigation'
        aria-label='pagination'
      >
        <PaginationLink
          isPrevious
          isDisabled={currentPage === 1}
          to={`/page-${currentPage - 1}`}
        >
          <GrFormPrevious />
        </PaginationLink>

        <PaginationLink
          isNext
          isDisabled={currentPage === pageCount}
          to={`/page-${currentPage + 1}`}
        >
          <GrFormNext />
        </PaginationLink>

        <PaginationList>
          {pages.map((page, i) => {
            return <li>{page}</li>
          })}
        </PaginationList>
      </PaginationWrapper>
      <CenteredBox>
        {currentPage} / {pageCount}
      </CenteredBox>
    </>
  )
}

export default PostPagination
