import PageTheLoai from '@/components/genres'
import React from 'react'

type Props = {}

const GenresPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
        <PageTheLoai params={params.slug}/>
    </>
  )
}

export default GenresPage