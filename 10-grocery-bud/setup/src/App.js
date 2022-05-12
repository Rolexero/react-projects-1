import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=>{
  const item = localStorage.getItem('list');
  if (item) {
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false)
  const [list, setList] = useState(getLocalStorage());
  const [editId, setEditId] = useState()
  const [alert, setAlert] = useState({
    show: false, msg: '', type: ''
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, 'please enter a value', 'danger')
    }
   else if (name && isEditing) {
      // deal with edit
      setList(list.map((item)=>{
        if (item.id === editId) {
          return {...item, title: name}
        }
        return item
      }))
      setName('');
      setEditId(null);
      setIsEditing(false)
      showAlert(true, 'item edited', 'success')
    }
    else{
      // show alert for new item
      showAlert(true, 'item added to the list', 'success')
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      setList([...list, newItem]);
      setName('')
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  
  }, [list])
  

  const showAlert = (show=false, msg='', type='')=>{
            setAlert({
              show: show,
              msg: msg,
              type: type
            });
  }

    const clearItem = () => {
      showAlert(true, "empty list", "danger");
      setList([]);
    };

    const removeItem = (id)=>{
      showAlert(true, 'Item removed', 'danger');
      setList(list.filter((item)=>item.id !== id))
    } 

    const editItem = (id)=>{
      const specificItem = list.find((item)=> item.id === id);
      setIsEditing(true);
      setEditId(id);
      setName(specificItem.title)
    }

  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert}  showAlert={showAlert} list={list}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearItem}>Clear items</button>
        </div>
      )}
    </section>
  );
}

export default App
