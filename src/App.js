import React, { useState } from 'react';
import './App.css';
import Working from './components/Working';
import Done from './components/Done';

function App() {
  //works 객체 기본State생성
  const [works, setWorks] = useState([
    {
      id: 0,
      title: '리액트 공부하기',
      desc: '리액트 기초를 공부해봅시다.',
      isDone: false,
    },
    {
      id: 1,
      title: '리액트 공부하기',
      desc: '리액트 기초를 공부해봅시다.',
      isDone: true,
    },
  ]);

  //title state 만들기
  const [title, setTitle] = useState('');
  //desc state 만들기
  const [desc, setDesc] = useState('');
  //Work 추가하기 버튼핸들러
  const addWorkHandler = () => {
    const newWork = {
      id: Math.random() * 100,
      title: title,
      desc: desc,
      isDone: false,
    };
    setWorks([...works, newWork]);
    //인풋태그value 제거하기위함
    setTitle('');
    setDesc('');
  };
  //Work 제거하기 버튼핸들러
  const removeWorkHandler = (id) => {
    //해당 id값만 제거
    const newWorkList = works.filter((work) => work.id !== id);
    //state 재할당
    setWorks(newWorkList);
  };
  //isDone 변경하기 버튼핸들러
  const changeWorkHandler = (id) => {
    const findIndex = works.findIndex((work) => work.id === id);
    let copyWorks = [...works];
    if (findIndex !== -1) {
      if (copyWorks[findIndex].isDone === false) {
        copyWorks[findIndex] = { ...copyWorks[findIndex], isDone: true };
      } else {
        copyWorks[findIndex] = { ...copyWorks[findIndex], isDone: false };
      }
    }
    setWorks([...copyWorks]);
  };
  return (
    <div className="layout">
      <div className="top-bar">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="input-div">
        <div className="input-bar">
          <div className="input-title">제목</div>
          <input
            id="title-input"
            type="text"
            value={title}
            className="input-space"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="input-title">내용</div>
          <input
            id="desc-input"
            type="text"
            value={desc}
            className="input-space"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <button className="add-button" onClick={addWorkHandler}>
            추가하기
          </button>
        </div>
      </div>
      <div className="list-container">
        <div className="under-title">Working.. 🔥</div>
        <div className="list-wrapper">
          {works
            .filter((work) => {
              return work.isDone === false;
            })
            .map((work) => {
              return (
                <Working
                  handleRemove={removeWorkHandler}
                  handleChange={changeWorkHandler}
                  work={work}
                  key={work.id}
                />
              );
            })}
        </div>
        <div className="under-title">Done..! 🎉</div>
        <div className="list-wrapper">
          {works
            .filter((work) => {
              return work.isDone === true;
            })
            .map((work) => {
              return (
                <Done
                  handleRemove={removeWorkHandler}
                  handleChange={changeWorkHandler}
                  work={work}
                  key={work.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
