function Custombutton({ work, handleChange }) {
  if (work.isDone === false) {
    return (
      <button
        className="todo-complete-button"
        onClick={() => {
          handleChange(work.id);
        }}
      >
        완료
      </button>
    );
  } else {
    return (
      <button
        className="todo-cancle-button"
        onClick={() => {
          handleChange(work.id);
        }}
      >
        취소
      </button>
    );
  }
}

export default Custombutton;
