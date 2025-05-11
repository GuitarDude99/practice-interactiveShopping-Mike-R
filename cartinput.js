
const itemInput = document.getElementById('itemInput'); // this is the input box we originally had
const addBtn = document.getElementById('addBtn');
const shoppingList = document.getElementById('shoppingList');

//Functions

function addItem () {

const item = itemInput.value;                   //this this is what we use to input and change the item name itself
let listItem = document.createElement('li'); //this is an element
    listItem.textContent = item;                //this textcontent changes based on what we input

const removeBtn = 
    document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", 
        function() { listItem.remove();
        });




const editBtn = document.createElement("button");
                editBtn.textContent = "Edit";
                editBtn.addEventListener("click", function() { 

listItem.textContent = ''; // check later?

let input = document.createElement('input');
input.type = 'text;'
input.placeholder = 'Edit current item'


const saveBtn = document.createElement("button");
                saveBtn.textContent = "Save";


                listItem.appendChild(saveBtn)
                listItem.appendChild(input);

        saveBtn.addEventListener("click", function() {
            listItem.textContent = input.value

            listItem.appendChild(editBtn);
            listItem.appendChild(removeBtn);

            
            //We need to bring back our remove and edit buttons.
            // We made them before, so we just need to incorporate the existing code for removeBtn and editBtn into our newly edited  list item that we just saved.
           
           
        })

    

  });



shoppingList.appendChild(listItem);
listItem.appendChild(removeBtn);
listItem.appendChild(editBtn);


    }


addBtn.addEventListener("click", addItem);



