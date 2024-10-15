import { FaRegHeart } from "react-icons/fa";

export default function WishList() {
  return (
    <>
      <div className="toolbar-icon mr">
        <FaRegHeart className="icon" />
        <div className="toolbar-count">0</div>
      </div>
    </>
  );
}
