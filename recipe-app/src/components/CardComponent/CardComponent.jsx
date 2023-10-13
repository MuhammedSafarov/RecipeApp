import React from "react";
import { Card } from "antd";
import recipes from "../../Data/recipes";
import "./Card.scss";
import { StarOutlined } from "@ant-design/icons";

const { Meta } = Card;
console.log(recipes);
const CardComponent = () => {
  return (
    <div className="card-container">
      {recipes.map((el) => {
        return (
          <Card
            className="item"
            key={el.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={el.image} />}
          >
            <div className="card-info">
              <Meta title={el.title} description={el.rating} />
              <StarOutlined />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardComponent;
