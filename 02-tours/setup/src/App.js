import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const fetchTours = async()=>{
    setLoading(true)

    try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('something went wrong')
          }
          const toursData = await response.json();
          console.log(toursData);
          setTourData(toursData);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  const removeTour = (id)=>{
    const newTours = tourData.filter((tour)=>tour.id !== id)
    setTourData(newTours)
  }

useEffect(() => {
    fetchTours();
}, [])

  if (loading) {
    return (
      <main>
        <Loading />
    </main>
    );
  }

  if (tourData.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }

  return (
      <main>
        <Tours tourData={tourData} removeTour={removeTour}/>
      </main>
  )
}

export default App
