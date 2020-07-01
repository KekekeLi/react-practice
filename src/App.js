import React from "react";
// import ListItem from "./components/listItem";
import ListItem from "./components/listItemFunc";

const listData = [
  {
    id: 1,
    name: "sony 65寸高清电视",
    price: 4000,
  },
  {
    id: 2,
    name: "华为 Meta30",
    price: 6000,
  },
  {
    id: 3,
    name: "华硕 玩家国度笔记本",
    price: 10000,
  },
];

function App() {
  return (
    <div className="container">
      <ListItem data={listData[0]} />
      <ListItem data={listData[1]} />
      <ListItem data={listData[2]} />
    </div>
  );
}

export default App;
