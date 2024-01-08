import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
// import firebase from "firebase/app";
import 'firebase/database'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const tasksRef = firebase.database().ref('tasks')

        tasksRef.on('value', (snapshot) => {
            const tasksData = snapshot.val();
            const tasksArray = tasksData ? Object.values(tasksData) : [];
            setTasks(tasksArray);
        });

        return () => tasksRef.off('value')      
    }, [])

    return (
        <div>
          <h2>Task List</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} - {task.description}
                {/* Add other task details as needed */}
              </li>
            ))}
          </ul>
        </div>
    );
}

export default TaskList