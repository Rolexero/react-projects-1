import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const  allCategories  = ['all', ...new Set(items.map((item)=> item.category))];

function App() {
    const [dataItems, setDataItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filteredItems = (category)=>{
      if (category === 'all') {
        setDataItems(items);
        return;
      }
      const newItems = items.filter((dataItem)=> dataItem.category === category);
      setDataItems(newItems)
    }
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filteredItems={filteredItems} categories={categories}/>
          <Menu dataItems={dataItems} />
        </section>
      </main>
    );
}

export default App;