
const button = document.querySelector('.r_button');
const container = document.querySelector('.note_container')

const updateLSdata = () =>{
const textAreaData = document.querySelectorAll('textarea');
// console.log(textAreaData)
const notes = [];
textAreaData.forEach((note)=>{
    return notes.push(note.value);
})
console.log(notes)
localStorage.setItem('notes', JSON.stringify(notes));
}

const addNotes = (text="") =>{
  const note = document.createElement('div');
  note.classList.add('notes');
//   console.log(note);

  const htmlData = `
  <div class="note">
  <div class="operation">
  <button class="edit"> <i class="fas fa-edit"></i> </button>
  <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
  </div>
  <div class="main_div">
  <div id="main_div" class="${text ? " " : "hidden"}"></div>
  <textarea id="textArea" class="${text ? "hidden" : " "}"></textarea>
  </div>
  </div> `;
  
note.insertAdjacentHTML('afterbegin', htmlData);
//   appendchild in the container
  container.appendChild(note);
//  console.log(note)
//   getting the references
const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete');
const textArea = note.querySelector('#textArea');
const main_div = note.querySelector('#main_div');

//   here delete function
deleteBtn.addEventListener('click', ()=>{
    note.remove();
    updateLSdata();
})

// toggle the textArea and mainDiv
textArea.value = text;
main_div.innerHTML = text;

editBtn.addEventListener('click', () =>{
    textArea.classList.toggle('hidden');
    main_div.classList.toggle('hidden');
})
textArea.addEventListener('change', (e) =>{
 const value = e.target.value;
  main_div.innerHTML = value;

  updateLSdata();
})
}
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note)=> addNotes(note))};
button.addEventListener('click', ()=> addNotes())














