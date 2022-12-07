let plus_sign = document.getElementsByClassName("plus_sign")[0];
let main_section = document.getElementsByClassName("main_section")[0];
let container = document.getElementsByClassName("container");
var delete_icon;
let counter = 0;
let main_func = () => {
    const a = document.createElement("div");
    a.innerHTML = `<div class="container" id="container_${counter}"}>
    <div class="edit_bar">
    <div class="Edit">
    <span>Note number ${counter + 1}</span>
    </div>
    <div class="delete">
    <span class="material-symbols-outlined delete_icon"> delete </span>
    </div>
    </div>
    <textarea name="" class="text" id="" cols="35" rows="17"></textarea>
    </div> `;
    main_section.appendChild(a);
    counter++;
    let dlt = a.getElementsByClassName("delete")[0];
    dlt.addEventListener("click", () => {
        a.remove();
    });
};

plus_sign.addEventListener("click",()=> main_func());