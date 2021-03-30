import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App= () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Mina protocol',
        day: 'April 13th at 12am',
        reminder: true,

    },
    {
        id: 2,
        text: 'Boson protocol',
        day: 'April 7th at 7pm',
        reminder: true,

    },
    {
        id: 3,
        text: 'AIOZ protocol',
        day: 'April 2th at 11am',
        reminder: true,

    },

]
)
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
