function Done(props) {
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
          className="todo-cancle-button"
          onClick={() => {
            props.handleChange(props.work.id);
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}

export default Done;
