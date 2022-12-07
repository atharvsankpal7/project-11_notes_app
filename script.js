let plus_sign = document.getElementsByClassName("plus_sign")[0];
let main_section = document.getElementsByClassName("main_section")[0];
let container = document.getElementsByClassName("container");
var delete_icon;
let counter = 0;
let LSnotes = JSON.parse(localStorage.getItem("notes"));
let main_func = () => {
    const a = document.createElement("div");
    a.innerHTML = `<div class="container" id="container_${counter}"}>
    <div class="edit_bar">
    <div class="Edit">
    <span>Note number ${counter + 1}</span>
    </div>
    <div class="">
    <span class="material-symbols-outlined save"> save </span>
    <span class="material-symbols-outlined delete_icon delete"> delete </span>
    </div>
    </div>
    <textarea name="" class="text" id="" cols="35" rows="17"></textarea>
    </div> `;
    main_section.appendChild(a);
    UpdateLocalStorage();
    counter++;
    let dlt = a.getElementsByClassName("delete")[0];
    let save = a.getElementsByClassName("save")[0];
    dlt.addEventListener("click", () => {
        a.remove();
        UpdateLocalStorage();
    });
    save.addEventListener("click", () => {
        UpdateLocalStorage();
    });
};
let count = 0;
plus_sign.addEventListener("click", () => main_func());
if (LSnotes) {
    LSnotes.forEach((e) => {
        main_func();
        document.getElementsByClassName("text")[count].innerHTML = e;
        count++;
    });
}
function UpdateLocalStorage() {
    let notesText = document.getElementsByTagName("textarea");
    let note = [];
    Array.from(notesText).forEach((element) => {
        note.push(element.value);
    });
    console.log(note);
    localStorage.setItem("notes", JSON.stringify(note));
}

