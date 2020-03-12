import '../css/style';

let notesIdCounter = 0; 
let notesArr = [];

checkLocalStorage();
eventLoad();

function eventLoad(){
	document.querySelector('form').addEventListener('submit', submitNote);
	document.getElementById('board-notes').addEventListener('click', deleteOrEdit);
}

/* check localStorage after open app*/
function checkLocalStorage(){
	const oldNotesArr = localStorage.getItem('notesArr');

	if(oldNotesArr !== null){
		notesArr = JSON.parse(oldNotesArr);

		for(let i = 0; i < notesArr.length; i++){
			addNoteToHTML(notesArr[i]);	
		}

		setNotesCounter();
		localStorage.removeItem('notesArr');

	}
};

function setNotesCounter(){
	notesIdCounter = notesArr[notesArr.length -1]['noteId'] + 1;
	//console.log(notesIdCounter);
}

const getData = () =>{
	let now = new Date();

	return`${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
}

const createNoteObject = (noteTitle, noteText, noteId = notesIdCounter, noteData = getData()) => 
{
	let note = {
		noteId: `${noteId}`,
		noteTitle: `${noteTitle}`,
		noteText: `${noteText}`,
		noteData: `${noteData}`
	};

	return note;
}

const isHTML = (inputValue) =>{
	const regex = /<[^>]*>/g;

	return regex.test(inputValue);
}

function submitNote(event){
	event.preventDefault();

	let noteTitleValue = document.querySelector('input');
	let noteTextValue = document.querySelector('textarea');

	if(noteTitleValue.value !== '' && noteTextValue.value != ''){
		if(!isHTML(noteTitleValue.value) && !isHTML(noteTextValue.value)){
			let noteObject = createNoteObject(noteTitleValue.value, noteTextValue.value);
			addNoteToHTML(noteObject);
			addNoteToNotesArr(noteObject);

			noteTitleValue.value = '';
			noteTextValue.value = '';
			notesIdCounter += 1;
		}else{
			alert('Change the content');
		}		
	}else{
		alert('Complete the fields');
	}

}

function addNoteToHTML(noteObject){
	let boardNotes = document.getElementById('board-notes');
	let div = document.createElement('div');
	const { noteId, noteTitle, noteText, noteData } = noteObject;
	
	div.classList.add('note');
	div.innerHTML = `<h3 class="note-title">${noteTitle}</h3>
					<p class="data">${noteData}</p>
					<p class="note-text">${noteText}</p>
					<div id="${noteId}" class="buttons">
						<button class="edit">Edit</button><button class="delete">Delete</button>
					</div>`;
	
	boardNotes.appendChild(div);	
}

function deleteOrEdit(event){

	if(event.target.className === 'edit'){
		editNote(event);
	}else if(event.target.className === 'delete'){
		deleteNote(event);
	}

}

function deleteNote(event){
	//remove note from site
    let note = event.target.parentNode.parentNode;
    let notesBoard = note.parentNode;
    notesBoard.removeChild(note);

    //remove note from arr
    let noteId = event.target.parentNode.id;
    deleteNoteFromArr(noteId)
}

function editNote(event){
	let form = document.querySelector('form');
	let note = event.target.parentNode.parentNode;

	//note title
	form[0].value = note.childNodes[0].innerText; //innerHTML
	//note text
	form[1].value = note.childNodes[4].innerText; //innerHTML

	deleteNote(event);
}

function addNoteToNotesArr(noteObject)
{
	notesArr.push(noteObject);
}

function deleteNoteFromArr(noteId){
	for(let i = 0; i < notesArr.length; i++){

		if(notesArr[i]['noteId'] == noteId){
    		notesArr.splice(i, 1);
    	}

    }
    console.log(notesArr);
}

/* saves notesArr in localStorage when the window closes */
window.addEventListener("beforeunload", function (event) {
	if (localStorageTest() && notesArr.length !== 0){
		localStorage.setItem('notesArr',JSON.stringify(notesArr));                      
	}
});

function localStorageTest(){
    const test = 'test' + new Date().valueOf();
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
