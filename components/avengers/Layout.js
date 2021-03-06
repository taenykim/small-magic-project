import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentsMenubar from "../ContentsMenubar";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const Description = styled.div`
  margin-bottom: 20px;
  font-family: escore6;
  font-size: 13px;
  color: white;
  background: orange;
  width: 100vw;
  text-align: center;
  padding: 4px 0px 4px 0px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 480px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  height: 100px;
  margin-bottom: 100px;
  border-radius: 10px;
  background: lightgrey;
  overflow: scroll;
  & > div {
    display: flex;
    height: 100%;
  }
`;

const VSContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px 0px #888;
  padding: 0px 20px 0px 20px;
`;

const DndContainer = styled.div`
  display: flex;
`;

const Layout = () => {
  const data = useSelector((state) => state.avengers);
  const [dndData, setDndData] = useState(data);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1000) {
      document.querySelector(".mobile_description").setAttribute("style", "display:block; margin-bottom:20px;");
    } else {
      document.querySelector(".mobile_description").setAttribute("style", "display:none;margin-bottom:20px;");
    }
  });

  const onDrageStartHandler = () => {
    // document.body.style.transition = 'background-color 0.2s ease'
    for (let i = 0; i < document.querySelectorAll(".droppable_table").length; i++) {
      document.querySelectorAll(".droppable_table")[i].style.background = `rgba(255,141,217,0.2)`;
    }
  };

  const onDrageUpdateHandler = (update) => {
    // const { destination } = update
    // const opacity = destination ? destination.index / Object.keys(dndData.items).length : 0
    // document.querySelector('.droppable_table').style.background = `rgba(153,141,217,${opacity})`
  };

  const onDrageEndHandler = (result) => {
    document.body.style.color = "inherit";
    document.body.style.background = "inherit";
    for (let i = 0; i < document.querySelectorAll(".droppable_table").length; i++) {
      document.querySelectorAll(".droppable_table")[i].style.background = `inherit`;
    }
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    console.log(result);

    const start = dndData.columns[source.droppableId]; // 'column-1'
    const finish = dndData.columns[destination.droppableId];

    if (start === finish) {
      const newItemIds = Array.from(start.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        itemIds: newItemIds,
      };
      const newDndData = {
        ...dndData,
        columns: {
          ...dndData.columns,
          [newColumn.id]: newColumn,
        },
      };
      setDndData(newDndData);
      return;
    }

    const startItemIds = Array.from(start.itemIds);
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      itemIds: startItemIds,
    };

    const finishItemIds = Array.from(finish.itemIds);
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      itemIds: finishItemIds,
    };

    const newDndData = {
      ...dndData,
      columns: {
        ...dndData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setDndData(newDndData);
    return;
  };

  return (
    <BackgroundContainer>
      <ContentsMenubar name="avengers" data={dndData} />
      <Description>Try Drag & Drop</Description>
      <TopContainer>
        <DragDropContext onDragStart={onDrageStartHandler} onDragUpdate={onDrageUpdateHandler} onDragEnd={onDrageEndHandler}>
          <DndContainer>
            {dndData.columnOrder.map((columnId) => {
              const column = dndData.columns[columnId];
              const items = column.itemIds.map((itemId) => dndData.items[itemId]);

              return <Column key={column.id} column={column} items={items} />;
            })}
          </DndContainer>
        </DragDropContext>
      </TopContainer>
      <Description>Make them friends</Description>
      <div className="mobile_description">scroll &gt;&gt;&gt; </div>

      <BottomContainer>
        <div>
          {dndData.columns["column-1"].itemIds.map((v, i) => {
            // const heightRate = 100 / dndData.columns['column-1'].itemIds.length
            return <img key={i} style={{ borderRadius: "10px", width: "90px", height: "90px", padding: "5px" }} src={dndData.items[v].src} />;
          })}
        </div>
        {dndData.columns["column-1"].itemIds.length === 0 || dndData.columns["column-2"].itemIds.length === 0 ? (
          <VSContainer>
            Friend <span>❤️</span>
          </VSContainer>
        ) : (
          <VSContainer>vs</VSContainer>
        )}
        <div>
          {dndData.columns["column-2"].itemIds.map((v, i) => {
            // const heightRate = 100 / dndData.columns['column-2'].itemIds.length

            return <img key={i} style={{ borderRadius: "10px", width: "90px", height: "90px", padding: "5px" }} src={dndData.items[v].src} />;
          })}
        </div>
      </BottomContainer>
    </BackgroundContainer>
  );
};

export default Layout;
