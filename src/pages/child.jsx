import { useState } from "react";


const Child = ({ fromParent }) => {
  console.log(fromParent);
  const fromParentLocal = fromParent
  const [localValue, setLocalValue] = useState(fromParent)
  return <div style={{border: '1px solid', marginTop: 5}}>
    <hr />
    直接用来自父组件的值prop：
    <div>{fromParentLocal}</div>
    <hr />
    使用来自父组件prop初始化的state：
    <div>{localValue}</div>
  </div>
};
export default Child;