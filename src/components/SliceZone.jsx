import React, { Component } from 'react'
import { BodyText, Image, Quote, Carousel, CodeBlock } from '../slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        case 'quote':
          return <Quote key={s.id} input={s} />
        case 'carousel':
          return <Carousel key={s.id} input={s} />
        case 'code_block':
          return <CodeBlock key={s.id} input={s} />
        default:
          return null
      }
    })
    return <div>{slice}</div>
  }
}
