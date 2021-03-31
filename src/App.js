import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
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
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
      id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Task To Show'
      )}
    </div>
  );
}

export default App;
