# 리액트 입문주차 과제


## 1) 실행화면 및 주소
    ![ReacthomeworkImg](https://user-images.githubusercontent.com/117638805/204181998-14dde8b0-943c-4492-b98b-639d382ed589.png)
    https://reacthomework1.vercel.app/


## 2) trouble shooting
    1. 추가하기 버튼을 누르면 새로고침이 되어서 State값이 초기값으로 돌아가는 문제
      : button태그를 form태그 안에 넣어둘 때 버튼을 클릭하면 새로고침이 된다는 것을 구글링을 통해 알게되었다.
        button태그를 감싸는 form태그를 제거하고, div태그로 묶어 해당 현상을 방지하였다.
    
    2. 자식컴포넌트에서 State값을 변경했지만 리렌더링이 안되는 문제
      : props로 내려준 초기 State에서 객체 속 isDone값을 변경헀으나, 이를 리렌더링 하는데 문제가 발생하였다.
        '부모컴포넌트에서 props로 내려줄 때 if문을 사용하여 그런 문제가 발생한게 아닐까'라는 담임매니저님의 의견에 따라
        if문을 제거하고 filter메소드를 이용하여 분리하고, 그 배열을 map을 사용하여 props로 내려주었다.
    
    3. State값을 변경했을 때 배열형식으로 와야할 State가 객체형식으로 와서 filter메소드가 실행되지 않는 문제
      : 위에서의 리렌더링 문제는 해결했지만, isDone을 변경하고 리렌더링 되는 상태에서 filter에 객체가 들어와 오류가 발생했다.
        처음에는 filter문을 작성한 형태가 문제일까 싶어 여러가지 방법을 시도했지만, 모두 적절한 답이 아니었다.
        정답은 isDone을 바꾸는 함수에서 State값을 재지정할때 전개연산자로 객체를 넣고, 그걸 배열로 감싸지 않아서 발생했던 문제였다.
        console.log를 사용하여 여러군데를 찍어보다 발견하게되었다. 다시한번 console.log의 중요성을 깨닫게 되었다.


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
