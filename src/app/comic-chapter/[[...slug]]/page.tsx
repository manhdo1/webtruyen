
import dynamic from "next/dynamic";
const ComicChapters = dynamic(() => import('@/components/comic-chapter'))
const ComicChapter = ({ params }: { params: { slug: string[] } }) => {
  return (
    <ComicChapters param={params}/>
  );
};
export default ComicChapter;
