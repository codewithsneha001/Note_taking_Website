console.log('connected👍');

let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addtTxt = document.getElementById("note-text");


addBtn.addEventListener("click", (e) => {
    if (addTitle.value == "" || addtTxt.value == "") {
        return alert("Please add  note title and details");
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addtTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addtTxt.value = "";

    showNotes();
})

//To show notes on the page
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div id="note">
          <p class="note-conter">Note ${index+1}</p>
          <h3 class="note-title">${element.title}</h3>
          <p class="note-text">${element.text}</p>
          <button id="${index} onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
          < button id="${index} onclick="editNote(this.id)" class="note-btn edit-btn">Edit Note</button>

        </div>
        `;
    });
    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = "No Notes Yet! Add a note using the form above";
    }
}
//function to delete notes
function deleteNote(index) {
    let confirmDel = confirm("You are deleting this notes!");
    if (confirmDel == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notsObj = JSON.parse(notes);
        }
        notesobj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
    }
    //function to edit the notes
    function editNote(index) {
        let confirmeDel = confirm("You are deleting this notes!");

        if (addTitle.value != "" || addTxt.value != "") {
            return alert("Please clear the form before editing a note")
        } else {
            notsObj = JSON.parse(notes);
        }
        //console.log(notesObj);
        notesObj.findIndex((element, index) => {
            addTitle.value = element.title;
            addTxt.value = element.text;
        })
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}
//showNotes()