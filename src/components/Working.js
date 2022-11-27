function Working(props) {
  return (
    <div className="todo-container">
      <div className="todo-title">{props.work.title}</div>
      <div>{props.work.desc}</div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => {
            props.handleRemove(props.work.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => {
            props.handleChange(props.work.id);
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default Working;
