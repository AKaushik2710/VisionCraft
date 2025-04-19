import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Div from './Div';
import Image from './Image';
import Button from './Button';

function MoodboardArea({ moodboard, setMoodboard }) {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(moodboard);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setMoodboard(reordered);
  };

  return (
    <Div cn="mt-5">
      <h3 cn="mb-3">Your Moodboard</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="moodboard" direction="horizontal">
          {(provided) => (
            <Div
              cn="d-flex gap-3 flex-wrap border p-3 rounded"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ minHeight: '180px' }}
            >
              {moodboard.map((img, index) => (
                <Draggable key={img.id} draggableId={img.id.toString()} index={index}>
                {(provided) => (
                  <Div
                    cn="card"
                    style={{ width: "150px" }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Div cn="position-relative">
                      <Button
                        cn="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
                        onClick={() => {
                          const updated = moodboard.filter((_, i) => i !== index);
                          setMoodboard(updated);
                        }}
                      >
                        &times;
                      </Button>
                      <Image
                        src={img.urls.small}
                        cn="card-img-top"
                        alt={img.alt_description}
                      />
                    </Div>
                  </Div>
                )}
              </Draggable>
              
              ))}
              {provided.placeholder}
            </Div>
          )}
        </Droppable>
      </DragDropContext>
    </Div>
  );
}

export default MoodboardArea;
