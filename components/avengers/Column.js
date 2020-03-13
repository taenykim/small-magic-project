import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 25vw;
  min-width: 120px;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 20px;
  font-family: escore7;
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {provided => (
          <TaskList
            className="droppable_table"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, i) => (
              <Task key={task.id} task={task} index={i} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}

export default Column
