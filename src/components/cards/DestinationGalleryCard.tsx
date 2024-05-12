interface IProps {
  imageUrl: string;
}

function DestinationGalleryCard({ imageUrl }: IProps) {
  return (
    <div className="relative ">
      <img src={imageUrl} className="h-[500px] rounded-[26px] object-cover" />
    </div>
  );
}

export default DestinationGalleryCard;
