//create & append child

// var para = document.createElement('p')
// var addValue = document.createTextNode('Created by Yash')
// para.appendChild(addValue)
// document.querySelector('div').appendChild(para)
// var addButton = document.getElementById('add');
// addButton.addEventListener('click', addItem);





function addItem() {

    let input = document.getElementById('name');
    let items = input.value;
    ul = document.getElementById('list');
    let textNode = document.createTextNode(items);

    if(items === '') {
        var p = document.createElement('p')
        var addValue = document.createTextNode('enter your list')
        p.appendChild(addValue)
        document.querySelector('div').appendChild(p)
        return false; 
    } else {
        
        //create list
        let li = document.createElement('li');

        //create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        //create label
        let label = document.createElement('label');
        //add element on web
        
        ul.appendChild(label);
        li.appendChild(checkbox);
        li.appendChild(label);
        label.appendChild(textNode);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className = 'visual';

        input.value = '';

        ul.style.backgroundColor = 'black';
        label.style.color = 'white';
        label.style.fontWeight = 'bold';
    }
}

function removeItem(){
        li = ul.children
        for (let index =0; index < li.length; index++) {
            while( li[index] && li[index].children[0].checked) {
                ul.removeChild(li[index])
            }
        }
}