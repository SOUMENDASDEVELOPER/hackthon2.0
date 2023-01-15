
function addTaskfunction(){
    var todo_input= document.getElementById("inputbtn");
    var list = document.getElementById("list");

    //li create
    var li = document.createElement('li');
    var li_text = document.createTextNode(todo_input.value);
    li.appendChild(li_text);
    list.appendChild(li);

    todo_input.value="";

    //create delete button
    var deletebtn = document.createElement("button")
    var deleteText=document.createTextNode("DELETE");
    deletebtn.setAttribute("class","dbtn");
    deletebtn.setAttribute("onclick","deleteItem(this)");
    deletebtn.appendChild(deleteText);
    li.appendChild(deletebtn);
    console.log(li);

} 

//additem delete 
function deleteItem(e){
     e.parentNode.remove();
}