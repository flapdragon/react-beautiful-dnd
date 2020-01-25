import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

// focus does not seem to work. neither my code or the code from the course, which i copy/pasted just to be safe.
const Container = styled.div`
  border: 3px solid lightgrey;
  border-radius: 50%;
  padding: 8px;
  margin-right: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: red !important;
  }
`

class Task extends React.Component {
  render() {
    const isDragDisabled = false
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.content[0]}</Container>
        )}
      </Draggable>
    )
  }
}

export default Task
