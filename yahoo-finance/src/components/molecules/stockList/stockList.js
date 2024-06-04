import StockListItem from "../stockListItem/stockListItem";

const stockList = ({ listItem }) => {
  return <div>{listItem.map(<StockListItem task={t} />)}</div>;
};
