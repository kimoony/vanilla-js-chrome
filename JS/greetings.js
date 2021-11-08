const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')


// 이렇게 반복되는 String 을 대문자 변수로 저정해 놓으면 실수가 줄고 
// string 이라는 사실을 기억하고 상기시키기 좋다.
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// submit 버튼을 눌렀을 때
function handleLoginSubmit(e) {
  // 새로고침 동작을 막아준다.
  e.preventDefault();
  // loginForm에 className hidden을 줘서 숨겨준다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // username 이라는 변수에 loginInput.value를 담아준다.
  const username = loginInput.value;
  // 로컬스토리지(브라우저)에 키, 값을 저장한다
  localStorage.setItem(USERNAME_KEY, username);  // key, value
  // 함수 호출, username을 인자로 ..
  paintGreetings(username);
}

function paintGreetings(username) {
  // #greeting에 `Hello ${username}`의 내용을 넣어준다.
  greeting.innerText = `Hello ${username}`; // 백틱(``)으로 하면 편해요!
  // #greeting에 className hidden 을 제거한다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// savedUsername 변수에 username 저장된 정보를 가져온다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

// savedUsername 이 null 이면 form이 보이고
if (savedUsername === null) {
  // show the form
  // loginform에 hidden 을 제거한다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // loginform에 이번트리스너로 submit
  loginForm.addEventListener('submit', handleLoginSubmit);
} else { // null이 아니면 paintGreetings 함수가 실행된다.
  // show the greeting
  paintGreetings(savedUsername);
}