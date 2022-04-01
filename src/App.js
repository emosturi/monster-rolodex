import './App.css';
import React, { useEffect, useState } from "react";
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [keySearch, setKeySearch] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    console.log('effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
    }
  ,[]);

  useEffect(()=>{
    console.log('second effect fired');
    setFilteredMonsters(monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(keySearch);
    }));
  },[keySearch, monsters]);

  const handleChange = (event) => {
      const typedString = event.target.value.toLocaleLowerCase();
      setKeySearch(typedString);
  }

  return (
      <div className='App'>
        <h1 className='app-title'>Monster Search DataBase</h1>
        <SearchBox handleChange={handleChange} placeholder='search mostros' className='monster-search-box' />
         {/*}{filteredMonsters.map((monster)=>{
           return (<div key={monster.id}><h1>{monster.name}</h1></div>);
         })}*/}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  // constructor(props){
  //   super()
  //   this.state= {
  //     monsters: [],
  //     keySearch: ''
  //   };
  // }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data =>
  //     this.setState(
  //       ()=>({
  //         monsters: data,
  //         provisoryMonsters: data
  //       })
  //     )
  //   );
  // }
  //
  // handleChange = (event)=>{
  //   const keySearch = event.target.value.toLocaleLowerCase();
  //   this.setState(()=>({
  //     keySearch
  //   }));
  // }
  //
  // render(){
  //   const {monsters, keySearch} = this.state;
  //   const {handleChange}= this;
  //   const filteredMonsters = monsters.filter((monster)=>{
  //     return monster.name.toLocaleLowerCase().includes(keySearch);
  //   });
  //   return (
  //     <div className='App'>
  //       <h1 className='app-title'>Monster Search DataBase</h1>
  //       <SearchBox handleChange={handleChange} placeholder='search mostros' className='monster-search-box' />
  //        {/*}{filteredMonsters.map((monster)=>{
  //          return (<div key={monster.id}><h1>{monster.name}</h1></div>);
  //        })}*/}
  //       <CardList monsters={filteredMonsters}/>
  //     </div>
  //   );
  // }
}

export default App;
