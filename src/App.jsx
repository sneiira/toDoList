import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { VscDiffAdded } from "react-icons/vsc";
import { useState } from 'react'
import './App.css'
import ListCard from './components/ListCard'
import ListView from './components/ListView';

function App() {
  const [lists, setLists] = useState([]);

  const handleAddList = () => {
    const newListTitle = prompt("Enter the title for the new list:");
    if(newListTitle.trim()) {
      const newList = {
        id: Date.now(),
        title: newListTitle,
        tasks: []
      };
      setLists([...lists, newList]);
    }
  };

  // Mueve addTaskToList fuera de handleAddList
  const addTaskToList = (listId, task) => {
    setLists(prevLists => prevLists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          tasks: [...list.tasks, task]
        };
      }
      return list;
    }));
  };

  return (
    <Router>
      <div className="app-container">
        <h1 className='title'>My To Do Lists</h1>
        <Routes>
          <Route path="/" element={
            <>
              {lists.length === 0 && <p>No lists available. Please add a new list.</p>}
              <div className="lists-container">
                {lists.map((list) => (
                  <ListCard key={list.id} id={list.id} title={list.title} />
                ))}
              </div>
              <div className="button-container">
                <button className='AddButton' onClick={handleAddList}><VscDiffAdded/></button>
              </div>
            </>
          } />
          <Route path="/list/:id" element={<ListView lists={lists} addTaskToList={addTaskToList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
