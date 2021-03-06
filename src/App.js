import React, { Component } from "react";
import ListItem from "./components/listItem";
// import ListItem from "./components/listItemFunc";

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

class App extends Component {
  renderList() {
    if (listData.length === 0) {
      return <div className="text-center">购物车是空的</div>
    }
    return listData.map(item => {
      return <ListItem key={item.id} data={item} onDelete={this.handleDelete}></ListItem>
    })
  }

  handleDelete = (id) => {
    console.log('id:   ',id);
  }

  render() {
    return (
      <div className="container">
        {/* {listData.length === 0 && <div className="text-center">购物车是空的</div>} */}
        {this.renderList()}
        {/* {listData.map(item => {
          return <ListItem key={item.id} data={item}></ListItem>
        })} */}
      </div>
    );
  }
}



export default App;
