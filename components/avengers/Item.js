import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background: ${props => (props.isDragging ? 'lightgreen' : 'white')};

  display: flex;
`

const Item = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {item.content}
        </Container>
      )}
    </Draggable>
  )
}

export default Item
