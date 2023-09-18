let myLibrary = [];

class Book{
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages; 
    }
    info = function () {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
      };

}


const submit = document.querySelector("#submit");
submit.addEventListener("click", clickSubmit);
function clickSubmit(event) {
  event.preventDefault();
  addBookToLibrary();
}

function showElement() {
  document.getElementById("main").innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "booksDiv");
    let tit = document.createElement("p");
    let au = document.createElement("p");
    let pag = document.createElement("p");
    let re = document.createElement("p");
    let btn = document.createElement("button");
    let readBtn = document.createElement("button");
    readBtn.innerText = "Read/Unread";
    btn.innerText = "Remove";

    btn.style.border = '0px solid black';
    btn.style.backgroundColor = 'transparent';
    btn.style.width = '10vw';
    btn.style.cursor = 'pointer';
    
    readBtn.style.border = '0px solid black';
    readBtn.style.backgroundColor = 'transparent';
    readBtn.style.width = '10vw';
    readBtn.style.cursor = 'pointer';

    tit.innerText = myLibrary[i].title;
    div.appendChild(tit);

    au.innerText = myLibrary[i].author;
    div.appendChild(au);

    pag.innerText = myLibrary[i].pages;
    div.appendChild(pag);

    re.innerText = myLibrary[i].read;
    div.appendChild(re);

    div.appendChild(btn);
    div.appendChild(readBtn);
    readBtn.setAttribute("id", i);
    btn.setAttribute("id", i);
    document.getElementById("main").appendChild(div);

    btn.addEventListener("click", () => {
      let el = parseInt(btn.id);
      removeElement(el);
    });

    readBtn.addEventListener("click", () => {
      let el = parseInt(readBtn.id);
      readUnread(el);
    });
  }
}

function addBookToLibrary() {
  document.getElementById("form").style.display = "none";
  let t = document.getElementById("title").value;
  let a = document.getElementById("author").value;
  let p = document.getElementById("pages").value;
  let r = document.getElementById("read").value;

  let libEle = new Book(t, a, p, r);

  myLibrary.push(libEle);

  showElement();
}

function visible() {
  document.getElementById("form").style.display = "flex";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = "";
  document.getElementById("title").focus();
}

function removeElement(el) {
  const firstSubArray = myLibrary.slice(0, el);
  el = el + 1;
  const secondSubArray = myLibrary.slice(el);
  const newArray = firstSubArray.concat(secondSubArray);
  myLibrary = newArray;
  showElement();
}

const closeForm = document.getElementById("closeForm");
closeForm.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("form").style.display = "none";
});

function readUnread(el) {
  if (myLibrary[el].read == "Read") {
    myLibrary[el].read = "Unread";
  } else {
    myLibrary[el].read = "Read";
  }
  showElement();
}
