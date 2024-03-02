import React, { useState } from 'react';
import './MainPage.css';


function MainPage() {
  const [isAddTaskWindowVisible, setAddTaskWindowVisible] = useState(false);
  const [isEditTaskWindowVisible, setEditTaskWindowVisible] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const handleShowAddTaskWindow = () => {
    setAddTaskWindowVisible(true);
    setSelectedTask(null);
    setNewTask('');
  };

  const handleHideAddTaskWindow = () => {
    setAddTaskWindowVisible(false);
  };

  const handleShowEditTaskWindow = (index) => {
    setEditTaskWindowVisible(true);
    setSelectedTask(index);
    setEditedTask(taskList[index]);
  };

  const handleHideEditTaskWindow = () => {
    setEditTaskWindowVisible(false);
    setSelectedTask(null);
    setEditedTask('');
  };

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      setNewTask('');
      handleHideAddTaskWindow();
    }
  };

  const handleEditTask = () => {
    if (selectedTask !== null && editedTask.trim() !== '') {
      setTaskList((prevTaskList) => {
        const updatedTaskList = [...prevTaskList];
        updatedTaskList[selectedTask] = editedTask;
        return updatedTaskList;
      });
      handleHideEditTaskWindow();
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList.splice(index, 1);
      return updatedTaskList;
    });
  };

  const handleShowAlert = () => {
   alert("add cource");
  };

  return (
    <>
      <section id="content">
        <main>
          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check" />
              <span className="text">
                <h3 style={{ fontSize: '21px' }}>مساقاتي المسجلة</h3>
                <p style={{ fontWeight: 'bold' }}>3</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-book" onClick={handleShowAlert} />
              <span className="text">
                <h3 style={{ fontSize: '21px' }}>المساقات المقترحة بالمركز</h3>
                <p style={{ fontWeight: 'bold' }}>4</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group" />
              <span className="text">
                <h3 style={{ fontSize: '21px' }}>مصادر تعليمية</h3>
                <p style={{ fontWeight: 'bold' }}>15</p>
              </span>
            </li>
          </ul>
          <div className="table-data">
            <div className="todo">
              <div className="head">
                <i className="bx add bx-plus" onClick={handleShowAddTaskWindow} />
                <i className="bx filt bx-filter" />
                <h3 style={{ marginLeft: '85%', fontSize: '30px' }}>مهامك</h3>
              </div>
              <ul className="todo-list">
                {taskList.map((task, index) => (
                  <li key={index}>
                    <span>
                      <i
                        className="bx deUp bx-edit-alt"
                        onClick={() => handleShowEditTaskWindow(index)}
                      />
                      <i
                        className="bx deUp bx-trash"
                        onClick={() => handleDeleteTask(index)}
                      />
                    </span>
                    <p style={{ fontSize: '26px' }}>{task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </section>

      {isAddTaskWindowVisible && (
        <div className="add-task-window">
          <h1>اضافة مهمة جديدة</h1>
          <input type="text" placeholder="ادخل مهمتك" value={newTask} onChange={handleTaskInputChange} />
          <button onClick={handleAddTask}>➕</button>
        </div>
      )}

      {isEditTaskWindowVisible && (
        <div className="edit-task-window">
          <h1>تحديث المهمة</h1>
          <input
            type="text"
            placeholder="ادخل مهمتك"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className='edit' onClick={handleEditTask}>تحديث</button>
          <button className="cancel" onClick={handleHideEditTaskWindow}>الغاء</button>
        </div>
      )}
    </>
  );
}

export default MainPage;
