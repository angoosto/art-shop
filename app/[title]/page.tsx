import DetailView from "../components/DetailView";
import { singlePiece } from "../api/ArtRepo";

export default async function SingleView({params} : {params: {title: string}}) {
  const title = params.title;
  const piece = await singlePiece(title)
  return <DetailView piece={piece} />;
}
