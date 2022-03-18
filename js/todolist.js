const toDoForm = document.querySelector('.todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('.todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
} // localstrage에 todos라는 이름으로 배열형태로 저장(배열은 아님, string임)

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove()
  toDos = toDos.filter((item) => item.id !== parseInt(li.id))
  saveToDos()
} // 엑스버튼 클릭 시 li 없어지게

function paintToDo(newvalue){
  const li = document.createElement('li')
  li.id = newvalue.id
  const span = document.createElement('span')
  span.innerText = newvalue.text
  const button = document.createElement('button')
  button.innerText = '💜'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
} // input에 입력됐던 값 li, span, button 만들어서 나타내기

function handleToDoSubmit (event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
} // input에 입력하고 엔터쳤을 때 동작 막고, value값 지우고, value로 입력됐던 값을 toDos배열에 넣고, localstrage에 저장


toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){  // localstorage에 저장된 값이 없지 않을 때
  const parsedToDos = JSON.parse(savedToDos)  //string으로 저장 됐던 값을 배열로 변경
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}  