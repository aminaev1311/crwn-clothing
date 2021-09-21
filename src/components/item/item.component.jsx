import "./item.styles.scss";

const Item = ({ elem }) => {
  return (
    <div className="item">
      <h4>{elem.name}</h4>
      <div className="item__image">
        <img src={elem.imageUrl} alt="" />
      </div>
      <p>{elem.price} USD</p>
    </div>
  );
};

export default Item;
