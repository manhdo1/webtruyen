import React from 'react'

type Props = {
    params: { slug: string }
}

const ComicDetail = ({ params }: Props) => {
  return (
    <div>ComicDetail {params.slug}</div>
  )
}

export default ComicDetail