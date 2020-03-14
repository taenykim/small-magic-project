import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Item from './Item'

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
const ItemList = styled.div`
  padding: 8px;
`

const Column = ({ column, items }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {provided => (
          <ItemList
            className="droppable_table"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, i) => (
              <Item key={item.id} item={item} index={i} />
            ))}
            {provided.placeholder}
          </ItemList>
        )}
      </Droppable>
    </Container>
  )
}

export default Column
