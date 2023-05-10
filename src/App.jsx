import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard'

function App() {

  const lodeCoffee = useLoaderData()
  const [coffees, setCoffee] = useState(lodeCoffee)

  return (
    <div className='m-20'>

      <h1 className='text-5xl font-bold text-purple-600 text-center'>Coffee Store All: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffee={setCoffee}
            ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
