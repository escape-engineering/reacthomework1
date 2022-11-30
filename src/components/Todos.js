import Custombutton from './Custombutton';

function Todos({ work, handleChange, handleRemove }) {
  return (
    <div className="todo-container">
      <div className="todo-title">{work.title}</div>
      <div>{work.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => {
            handleRemove(work.id);
          }}
        >
          삭제하기
        </button>
        <Custombutton work={work} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Todos;
