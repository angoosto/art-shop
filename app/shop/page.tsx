import ArtGrid from "../components/ArtGrid";
import { getPieces } from "../api/ArtRepo";

export default async function shop() {
  const pieces = await getPieces();
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <ArtGrid pieces={pieces} />
    </div>
  );
}
