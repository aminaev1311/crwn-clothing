import "./collections.styles.scss";
import React from "react";
import Item from "../item/item.component";

class Collections extends React.Component {
  render() {
    return (
      <div>
        <h1>Collections</h1>
        {this.props.collections.map((collection) => {
          return (
            <React.Fragment key={collection.id}>
              <h2 style={{ textAlign: "center" }}>{collection.title}</h2>
              <div className="card">
                {collection.items
                  .map((elem) => {
                    return <Item elem={elem} key={elem.id} />;
                  })
                  .filter((elem, idx) => idx < 4)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Collections;
