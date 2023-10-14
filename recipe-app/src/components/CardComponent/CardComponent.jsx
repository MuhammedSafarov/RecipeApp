import React from "react";
import { Card } from "antd";
import recipes from "../../Data/recipes";
import "./Card.scss";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;
console.log(recipes);
const CardComponent = () => {
  return (
    <div className="card-container">
      {recipes.map((el) => {
        return (
          <Link
            className="item"
            key={el.id}
            to={{ pathname: `/detail/${el.id}` }}
          >
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={el.image} />}
            >
              <Meta title={el.title} />
              <div className="card-info">
                <Meta className="description" description={el.rating} />
                <StarOutlined className="icon" />
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default CardComponent;
