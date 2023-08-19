import Image from "next/image";
import styleSheet from "@/styles/dist/avatar.module.css";

interface IAvatar {
  src: string;
  alt?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar: React.FC<IAvatar> = ({ src, alt, title, className, style }) => {
  return (
    <div className={`${styleSheet.imageBox} ${className}`} style={style}>
      <Image
        src={src}
        alt={alt ?? ""}
        title={title ?? ""}
        width={30}
        height={30}
      />
    </div>
  );
};

export default Avatar;
