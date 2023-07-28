import PageTheLoai from '@/components/genres'
import React from 'react'

type Props = {
  params: { slug: string }
}

const GenresPage = ({ params }: Props) => {
  return (
    <>
        <PageTheLoai params={params.slug}/>
    </>
  )
}

export default GenresPage