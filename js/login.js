// login
const loginForm = document.querySelector('.login-form')
const loginInput = document.querySelector(".login-form input")
const greeting = document.querySelector('.greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'


function loginClear(e) {
  e.preventDefault();
  const username = loginInput.value
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAME_KEY, username)
  alreadyLogin(username)
}

function alreadyLogin (username){
  greeting.innerText = `Hello ${username} !`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUser = localStorage.getItem(USERNAME_KEY)

if(savedUser == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', loginClear)
} else {
  alreadyLogin(savedUser)
}

