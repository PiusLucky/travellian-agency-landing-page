import { motion } from "framer-motion";

interface IProps {
  imageUrl: string;
}

function DestinationGalleryCard({ imageUrl }: IProps) {
  return (
    <motion.div whileHover={{ y: -30, scale: 1 }} initial={{ y: 0 }}>
      <img
        src={imageUrl}
        className="h-[500px] rounded-[26px] object-cover w-full"
      />
    </motion.div>
  );
}

export default DestinationGalleryCard;
