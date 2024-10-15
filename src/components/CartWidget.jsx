import { IoBagHandleOutline } from "react-icons/io5";

export default function CartWidget() {
  return (
    <div className="toolbar-icon mr-sm">
      <IoBagHandleOutline className="icon" />
      <div className="toolbar-count">0</div>
    </div>
  );
}
