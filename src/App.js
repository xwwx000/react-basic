import { useState,useEffect } from "react";
function App() {
  const [onOff,setOnOff] = useState(true)
  const name = 'aaa老师'
  const getAge = ()=>{
    return 18
  }
  const songs = [
    {id:1,name:'a1'},
    {id:2,name:'a2'},
    {id:3,name:'a3'},
    {id:4,name:'a4'}
  ]
  useEffect(() => {
    setOnOff(true)
  }, []);
  function formateTime(time){
    return `${time.getFullYear()}-${time.getMonth()}-${time.getDay()}`
  }
  return (
    <div className="App" onClick={()=>{
      console.log('aaaaaaaaaaa')
    }}>
      App--onOff --- {getAge()}
      {onOff ? 'aa':'bbb'}
      <ul>
      {songs.map(item =>{
        return <li key={item.id}>{item.name} - {formateTime(new Date())}</li>
      })}
      </ul>
    </div>
  );
}

export default App;
