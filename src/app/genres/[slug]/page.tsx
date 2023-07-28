// import PageTheLoai from '@/components/genres'
import dynamic from 'next/dynamic'
import React from 'react'
const PageTheLoai = dynamic(() => import('@/components/genres'))
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