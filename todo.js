const addForm = document.querySelector('.add');
let list = document.querySelector('.todos');
const delet = document.querySelectorAll('.delete');
const search = document.querySelector('.search input');
const lis = document.querySelector('.todos > li > span');

nst generateTemplate = todo =>{

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;


    list.innerHTML += html;
}
co

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    

    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    }


});

// delet.forEach(button => {
//     button.addEventListener('click', () => {
//         if(button.parentElement.tagName === "LI"){
//     button.parentElement.remove();
//         }
// });
// });

list.addEventListener('click', button => {
    if(button.target.classList.contains('delete')){
        button.target.parentElement.remove();
    }
});


const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) =>{
        return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
        todo.classList.add('filtered');
    });

    Array.from(list.children)
    .filter((todo) =>{
        return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
        todo.classList.remove('filtered');
    })
};


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
   
