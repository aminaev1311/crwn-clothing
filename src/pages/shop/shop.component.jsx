import "./shop.styles.scss";
import "../../components/collections/collections.component";
// import Collections from "../../components/collections/collections.component";
import SHOP_DATA from "./shop.data";
import REACT from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends REACT.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    // return <Collections collections={this.state.collections} />;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
