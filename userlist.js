
function onChanged() {
    // css selector
    // input control with name="rbActive" that is checked
    let rb = document.querySelector("input[name=rbActive]:checked");
    let filtered = people;
    if (rb.value == "active") {
        filtered = people.filter(user => user.active);
    } else if (rb.value == "inactive") {
        filtered = people.filter(user => !user.active);
    } else {
        filtered = people;
    }
    // update the table to show filtered
    updateTable(filtered);
}

let people = [
    { id:1, name:"Alice", email:"alice@gmail.com", active:true },
    { id:2, name:"Bob", email:"bob@gmail.com", active:false },
    { id:3, name:"Carol", email:"carol@gmail.com", active:false },
    { id:4, name:"Dan", email:"dan@gmail.com", active:true }, 
    { id:5, name:"Eve", email:"eve@gmail.com", active:false }, 
    { id:6, name:"Fred", email:"fred@gmail.com", active:true }, 
    { id:7, name:"Ger", email:"ger@gmail.com", active:false }, 
    { id:8, name:"Harriet", email:"harriet@gmail.com", active:true }, 
];

function updateTable(peopleList) {

    let tbody = document.getElementById("tblUsersTbody");
    
    // empty the table before adding rows
    tbody.innerHTML = "";
    peopleList.forEach(person => {
        tbody.innerHTML += `<tr>
            <td>${ person.id }</td>
            <td>${ person.name }</td>
            <td>${ person.email }</td>
            <td>${ person.active ? "Active" : "Inactive" }</td>
            </tr>`;
        });
}
updateTable(people);
        