// import PageTheLoai from '@/components/genres'
import Main from '@/components/main'
import dynamic from 'next/dynamic'
import React from 'react'
const PageTheLoai = dynamic(() => import('@/components/genres'))
type Props = {
  params: { slug: string }
}

const GenresPage = ({ params }: Props) => {
  return (
    <>
    <Main>
        <PageTheLoai params={params.slug}/>
    </Main>
    </>
  )
}

export default GenresPage