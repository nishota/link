import React from 'react';
import './App.css';
import Category from './component/Category';

function App(props) {
  const {datas} = props.input; 
  console.log(datas[0].name);
  const categoryDom = datas.map(x => <Category key={x.name} links={x.links} name={x.name} discription={x.discription}/>);
  return (
   <div>
    <h1>リンク集</h1>
    <div>
      {categoryDom}
    </div>
   </div>
  );
}

export default App;
