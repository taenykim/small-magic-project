import React, { useState } from 'react'
import styled from 'styled-components'
import ContentsMenubar from '../ContentsMenubar'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './Column'

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Captain America' },
    'task-2': { id: 'task-2', content: 'IonMan' },
    'task-3': { id: 'task-3', content: 'Thor' },
    'task-4': { id: 'task-4', content: 'Hulk' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Heros',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
}

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top:70px;
  }};
  background: #f5f6f7;
`

const Layout = () => {
  const [dndData, setDndData] = useState(initialData)

  const onDrageStartHandler = () => {
    document.body.style.color = 'orange'
    document.body.style.transition = 'background-color 0.2s ease'
  }

  const onDrageUpdateHandler = update => {
    const { destination } = update
    const opacity = destination ? destination.index / Object.keys(dndData.tasks).length : 0
    document.body.style.background = `rgba(153,141,217,${opacity})`
  }

  const onDrageEndHandler = result => {
    document.body.style.color = 'inherit'
    document.body.style.background = 'inherit'

    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    const column = dndData.columns[source.droppableId] // 'column-1'
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }
    const newDndData = {
      ...dndData,
      columns: {
        ...dndData.columns,
        [newColumn.id]: newColumn
      }
    }
    setDndData(newDndData)
  }

  return (
    <BackgroundContainer>
      <ContentsMenubar name="avengers" />
      <DragDropContext
        onDragStart={onDrageStartHandler}
        onDragUpdate={onDrageUpdateHandler}
        onDragEnd={onDrageEndHandler}
      >
        {dndData.columnOrder.map(columnId => {
          const column = dndData.columns[columnId]
          const tasks = column.taskIds.map(taskId => dndData.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    </BackgroundContainer>
  )
}

export default Layout
