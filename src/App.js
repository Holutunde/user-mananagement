import React,{useState, useEffect} from "react"
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
    const[lists, setLists] =useState([]);
    const[edit, setEdit] = useState(null);

     const LOCAL_StORAGE_KEY = "lists";

     const addList =(list)=> {
        const newList=[...lists,list];
        setLists(newList);
    }

     const removeList = index => {
       const New=lists.filter((item ,i) => i !== index)
       setLists(New)
    }

    const handleEdit = (index) => {
	     const findList = lists[index];
    setEdit({ ...findList, index });
    console.log(findList)
    
  }
    const updatelist = (index, data) =>{
        const list = lists.map((item, i) => {
          if (index === i) return data
          return item
        })

        setLists(list)
        setEdit(null)
   }
  useEffect(() =>{
     const retrieveLists = JSON.parse(localStorage.getItem(LOCAL_StORAGE_KEY)); 
     if(retrieveLists) setLists(retrieveLists)
  },[])
  
   useEffect(() =>{
    localStorage.setItem(LOCAL_StORAGE_KEY, JSON.stringify(lists)) 
  },[lists])
  
  return (
    <div className="App">
       
        <UserForm
        addList={addList}
        edit={edit}
        updatelist={updatelist}
        />
        <UserList
        lists={lists}
        setLists={setLists}
        handleEdit={handleEdit}
        removeList={removeList}
        />
    </div>
  );
}

export default App;
