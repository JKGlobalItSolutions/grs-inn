import SectionHeading from "../components/SectionHeading";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-inn">
        <SectionHeading
          eyebrow="A Closer Look"
          title="Gallery"
          subtitle="A glimpse into the rooms, interiors and everyday moments at GRS INN."
        />
        <Gallery />
      </div>
    </div>
  );
}
