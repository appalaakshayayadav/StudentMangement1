function add() {
    let n = document.getElementById("name").value;
    let li = document.createElement("li");
    li.innerText = n;
    document.getElementById("list").appendChild(li);
}
