# 리액트 입문주차 과제

## 실행화면 및 주소

## 컴포넌트별 구분

### App컴포넌트

    메인 컴포넌트입니다.
    초기 State값은 여기서 모두 정해집니다.
    초기 works State값의 title과 desc가 App컴포넌트의 input태그 안에서 결정됩니다.

### Working컴포넌트

    State works의 isDone값이 false인 것들만 출력하는 컴포넌트입니다.

    App컴포넌트로부터 받은 props중 handleChange를 이용하여,
    State중 isDone값을 변경해 리렌더링 되도록 하였습니다.

    App컴포넌트로부터 받은 props중 handleRemove를 이용하여,
    State works중 해당 버튼의 아이디값만 제거하고 나머지를 다시 State로서 선언하여,
    리렌더링이 되도록 하였습니다.

### Done컴포넌트

    State works의 isDone값이 true인 것들만 출력하는 컴포넌트입니다.

    App컴포넌트로부터 받은 props중 handleChange을 이용하여,
    State중 isDone값을 변경해 리렌더링 되도록 하였습니다.

    App컴포넌트로부터 받은 props중 handleRemove를 이용하여,
    State works중 해당 버튼의 아이디값만 제거하고 나머지를 다시 State로서 선언하여,
    리렌더링이 되도록 하였습니다.
