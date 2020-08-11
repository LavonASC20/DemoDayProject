let search = document.getElementById("search_btn");
let input = document.getElementById("search_txt");
let aRef = document.getElementById("button");

//search stuff
search.onclick = function(event){
    event.preventDefault();
    aRef.href = input.value;
}
search.onmouseover = function(event){
    event.preventDefault();

}