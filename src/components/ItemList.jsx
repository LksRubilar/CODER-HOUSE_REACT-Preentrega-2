import Item from "./Item";

export default function ItemList() {
  return (
    <>
      <div className={""}>
        {products.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
