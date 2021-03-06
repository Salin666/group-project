////test 
console.log("testt")



////test

////////////////////// create an array and other variable//////////////////////////////////////////////////////////////////
////////////////////// for saving GET data to create a nonrepeated id for POST
let dataArray = [];
////////////////////// inside POST function for getting id of element in dataArray and sorting
let idArray = [];

////////////////////// all 4 RESTFUL method function //////////////////////////////////////////////////////////////////////

// create Get function for the fisrt execute to add data to dataArray////////////////////////////////////////////////////
const getExecute = async (e) => {
  const data = await fetch('http://localhost:8080/todolist')
  const jsonResponse = await data.json()
  jsonResponse.forEach(data => dataArray.push(data))
  let displayhtml =  `
<tbody id="tableBody">
</tbody>`;
  for (let i of jsonResponse){
      displayhtml = displayhtml +
      `
      <tr>
          <td>${i.id}</td>
          <td>${i.name}</td>
          <td>${i.description}</td>
          <td>${i.assignedto}</td>
          <td>${i.duedate}</td>
          <td>${i.status}</td>
          <td><button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#exampleModal" onclick="prePutExecution(${i.id})"><i class="fas fa-pen"></i></button></td>
          <td><button type="button" class="btn btn-danger delete" onclick="delExecute(${i.id})"><i class="fas fa-trash-alt"></i></button></td>
      </tr>
      `
  }
  document.querySelector('#showToDoList').innerHTML = displayhtml;

  /////////////// summary bar show number
  let toDoCount = 0;
  let inProgressCount = 0;
  let reviewCount = 0;
  let doneCount = 0;

  dataArray.forEach(element => {
    switch (element.status) {
    case 'To Do':
      toDoCount++;
      break;
    case 'In Progress':
      inProgressCount++;
      break;
    case 'Review':
      reviewCount++;
      break;
    default:
      doneCount++;
      break;
    }
  })
  document.querySelector('#toDo').innerHTML = toDoCount;
  document.querySelector('#inProgress').innerHTML = inProgressCount;
  document.querySelector('#review').innerHTML = reviewCount;
  document.querySelector('#done').innerHTML = doneCount;
}

// create Post function ////////////////////////////////////////////////////
const postExecute = async (event) => {
  event.preventDefault();
  /////////////////////// checking empty blank field
  if(document.querySelector('#name').value && document.querySelector('#description').value && document.querySelector('#assignedto').value && document.querySelector('#duedate').value && document.querySelector('#status').value) {

    ///////////////////////create variable
    const formObject = {};
    let idToPost;

    ///////////////////////create nonrepeated id 
    idArray = [];
    dataArray.map(element => {
      idArray.push(element.id)
    })
    idArray.sort()
    for(let i = 0; i < idArray.length; i++) {
      if (i !== Number(idArray[i])) {
        idToPost = i;
        break;
      } else {
        idToPost = i + 1;
      }
    }
    formObject['id'] = `${idToPost}`;
    formObject['name'] = document.querySelector('#name').value;
    formObject['description'] = document.querySelector('#description').value;
    formObject['assignedto'] = document.querySelector('#assignedto').value;
    formObject['duedate'] = document.querySelector('#duedate').value;
    formObject['status'] = document.querySelector('#status').value;
    dataArray.push(formObject)
    const response = await fetch('http://localhost:8080/todolist', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formObject),
    })
    let jsonResponse = await response.json();
    getExecute();
    document.querySelector('#name').value = "";
    document.querySelector('#description').value = "";
    document.querySelector('#assignedto').value = "";
    document.querySelector('#duedate').value = "";
    document.querySelector('#status').value = "";
    $('.exampleModal').toggleClass('is-visible'); // or location.reload()
    dataArray = [];
  } else {
    alert('please fill all the blank')
  }
}

// create Put function ////////////////////////////////////////////////////
const putExecute = async (event) => {
  const id = event.target.id;
  const formObject = {};
  formObject['name'] = document.querySelector('#name').value;
  formObject['description'] = document.querySelector('#description').value;
  formObject['assignedto'] = document.querySelector('#assignedto').value;
  formObject['duedate'] = document.querySelector('#duedate').value;
  formObject['status'] = document.querySelector('#status').value;

  const response = await fetch(`http://localhost:8080/todolist/` + id, {
      method: 'PUT',
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formObject),
  })
  let jsonResponse = await response.json();
  location.reload();
}

  // create Delete function ////////////////////////////////////////////////////
  const delExecute = async (id) => {
    dataArray.splice(0, dataArray.length)
    const response = await fetch(`http://localhost:8080/todolist/` + id, {
        method: 'DELETE',
    })
    let jsonResponse = await response.json();
    getExecute();
  }
  
////////////////////////// 4 method execution //////////////////////////////////////////////////////////////////////////////

////////////////////////// GET execution
window.addEventListener('load', getExecute)

////////////////////////// POST execution
const postButton = document.querySelector('#submitForm');
postButton.addEventListener('click', postExecute)

////////////////////////// PUT preparation function
const prePutExecution = async (btnId) => {
  ////// get the right array position
  let id;
  idArray = [];
  dataArray.map(element => {
    idArray.push(element.id)
  })
  id = idArray.indexOf(`${btnId}`);
  ///// prewrite the value to the modal
  document.querySelector('#name').value = dataArray[id].name;
  document.querySelector('#description').value = dataArray[id].description;
  document.querySelector('#assignedto').value = dataArray[id].assignedto;
  document.querySelector('#duedate').value = dataArray[id].duedate;
  // document.querySelector('#status').options.value = dataArray[id].status;  // can't show the value
  document.querySelector('.updateBtn').id = btnId;
  document.querySelector('#submitForm').style.display = "none";
  document.querySelector('.updateBtn').style.display = "block";
}

////////////////////////// PUT preparation function execute
document.querySelectorAll('.edit').forEach(item => {
  item.addEventListener('click', () => {
    prePutExecution;
  })})

////////////////////////// PUT execution
const putButton = document.querySelector('.updateBtn');
putButton.addEventListener('click', putExecute)


////////////////////////// DELETE execution
document.querySelectorAll('.delete').forEach(item => {
  item.addEventListener('click', delExecute)
})

////////////////////////// sidebar function: show and hide////////////////////////////////////////////////////
const showAndHideButton = () => {
  let x = document.getElementById('layoutSidenav_nav')
  if(x.style.transform === 'translateX(-225px)') {
      x.style.transform = 'translateX(0px)';
  } else {
    x.style.transform = 'translateX(-225px)';
  }
}

////////////////////////// sidebar function execution ///////////////////////////////////////////////////////////
document.getElementById('sidebarToggle').addEventListener('click', showAndHideButton)

////////////////////////// taskAddButton function and execution ////////////////////////////////////////////////////
const taskAddButton = document.querySelector('#taskAddButton' && '#taskAddButton2') 
taskAddButton.addEventListener('click', () => {
  document.querySelector('#name').value = ""
  document.querySelector('#description').value = ""
  document.querySelector('#assignedto').value = ""
  document.querySelector('#duedate').value = ""
  document.querySelector('#status').value = ""
  
  document.querySelector('#submitForm').style.display = "block";
  document.querySelector('.updateBtn').style.display = "none";
}
)





//////////////////////////// show progress bar function: when in progress is selected//////////////////////////////////////
function progressBarShow(divId, element) {
  document.getElementById(divId).style.display = element.value == "In Progress" ? 'block' : 'none';

}











//https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/ multiple element with same event