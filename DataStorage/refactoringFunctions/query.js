let todos = []

 const filtering = function(){
    todos  = renderingLocaStorage()
    createElement()
}
filtering()

document.querySelector('#add-todo').addEventListener('click', function(){
    renderInputPara()
    filtering()
});
