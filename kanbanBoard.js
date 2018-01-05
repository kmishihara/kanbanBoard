////////// Kanban Board Assignment //////////

// Declare my columns which will be empty arrays
// that will take a task object

var uniqueIdCounter = 0;
var toDoList = [{
  title: 'Title1',
  desc: 'Desc1',
  assignee: 'me1',
  id: '1',
  type: 'todo'
}];
var inProgressList = [{
  title: 'Title2',
  desc: 'Desc2',
  assignee: 'me2',
  id: '2',
  type: 'inprogress'
}];
var completedList = [{
  title: 'Title3',
  desc: 'Desc3',
  assignee: 'me3',
  id: '3',
  type: 'completed'
}];
var acceptedList = [{
  title: 'Title4',
  desc: 'Desc4',
  assignee: 'me4',
  id: '4',
  type: 'accepted'
}];
var archiveList = [{
  title: 'Title5',
  desc: 'Desc5',
  assignee: 'me5',
  id: '5',
  type: 'archive'
}];

var toDoColumn = document.getElementById('todo');
var inProgressColumn = document.getElementById('inprogress');
var completedColumn = document.getElementById('completed');
var acceptedColumn = document.getElementById('accepted');
var archiveColumn = document.getElementById('archive');
var formContainer = document.getElementById('formcontainer');

function renderColumns(){
  // draw column title //
  toDoColumn.innerHTML = '<h3>To Do</h3>';
  inProgressColumn.innerHTML = '<h3>In Progress</h3>';
  completedColumn.innerHTML = '<h3>Completed</h3>';
  acceptedColumn.innerHTML = '<h3>Accepted</h3>';
  archiveColumn.innerHTML = '<h3>Archive</h3>';
  
  for(var i = 0; i < toDoList.length; i++){
    var newTodoCard = createCardElement(toDoList[i].title, 
                                        toDoList[i].desc, 
                                        toDoList[i].assignee, 
                                        toDoList[i].id, 
                                        toDoList[i].type);
    toDoColumn.appendChild(newTodoCard); 
  }
  
  for(var w = 0; w < inProgressList.length; w++){
    var newProgressCard = createCardElement(inProgressList[w].title, 
                                        inProgressList[w].desc, 
                                        inProgressList[w].assignee, 
                                        inProgressList[w].id, 
                                        inProgressList[w].type);
    inProgressColumn.appendChild(newProgressCard); 
  }
  
  for(var x = 0; x < completedList.length; x++){
    var newCompletedCard = createCardElement(completedList[x].title, 
                                        completedList[x].desc, 
                                        completedList[x].assignee, 
                                        completedList[x].id, 
                                        completedList[x].type);
    completedColumn.appendChild(newCompletedCard); 
  }
  
  for(var y = 0; y < acceptedList.length; y++){
    var newAcceptedCard = createCardElement(acceptedList[y].title, 
                                        acceptedList[y].desc, 
                                        acceptedList[y].assignee, 
                                        acceptedList[y].id, 
                                        acceptedList[y].type);
    acceptedColumn.appendChild(newAcceptedCard); 
  }
  
   for(var z = 0; z < archiveList.length; z++){
    var newArchiveCard = createCardElement(archiveList[z].title, 
                                        archiveList[z].desc, 
                                        archiveList[z].assignee, 
                                        archiveList[z].id, 
                                        archiveList[z].type);
    archiveColumn.appendChild(newArchiveCard); 
  }
}

renderColumns();

// function that creates an element
function createCardElement(title, desc, assignee, id, type){
  
  var card = document.createElement('div');
  card.className = 'card';

  var cardTitle = document.createElement('p');
  cardTitle.innerHTML = title; // passing from function parameter

  var cardDesc = document.createElement('p');
  cardDesc.innerHTML = desc; // passing from function parameter

  var cardAssignee = document.createElement('p');
  cardAssignee.innerHTML = assignee; // passing from function parameter

  var cardId = document.createElement('p');
  cardId.innerHTML = id;

  card.id = id; // passing from function parameter

  //// delete a task ////
  var deleteTaskForm = document.createElement('form');
  deleteTaskForm.onsubmit = deleteCard;
  
  var deleteTaskIdInput = document.createElement('input');
  deleteTaskIdInput.value = id;
  deleteTaskIdInput.name = 'id';
  deleteTaskIdInput.type = 'hidden';
  
  // determines what array to delete from //
  var deleteTaskTypeInput = document.createElement('input');
  deleteTaskTypeInput.value = type;
  deleteTaskTypeInput.name = 'type';
  deleteTaskTypeInput.type = 'hidden';
  
  // create a delete button //
  var deleteTaskButton = document.createElement('button');
  deleteTaskButton.innerHTML = 'X';  
  deleteTaskButton.value = id;
  deleteTaskButton.type = 'submit'; // calls 'onsubmit' above
  deleteTaskButton.className = 'deleteButton';
  
  deleteTaskForm.appendChild(deleteTaskIdInput);
  deleteTaskForm.appendChild(deleteTaskTypeInput);
  deleteTaskForm.appendChild(deleteTaskButton);
  
  //// move a task to another column ////
  var moveTaskForm = document.createElement('form');
  moveTaskForm.onsubmit = moveCard;
  
  var moveTaskIdInput = document.createElement('input');
  moveTaskIdInput.value = id;
  moveTaskIdInput.name = 'id';
  moveTaskIdInput.type = 'hidden';
  
  var moveTaskTypeInput = document.createElement('input');
  moveTaskTypeInput.value = type;
  moveTaskTypeInput.name = 'type';
  moveTaskTypeInput.type = 'hidden';
  
  // create a move next button //
  var moveTaskButton = document.createElement('button');
  moveTaskButton.innerHTML = '→';
  moveTaskButton.type = 'submit';
  moveTaskButton.className = 'moveNextButton';
  
  moveTaskForm.appendChild(moveTaskIdInput);
  moveTaskForm.appendChild(moveTaskTypeInput);
  moveTaskForm.appendChild(moveTaskButton);
  
  //// move a task backward ////
  var moveBackTaskForm = document.createElement('form');
  moveBackTaskForm.onsubmit = moveBackCard;
  
  var moveBackTaskIdInput = document.createElement('input');
  moveBackTaskIdInput.value = id;
  moveBackTaskIdInput.name = 'id';
  moveBackTaskIdInput.type = 'hidden';
  
  var moveBackTaskTypeInput = document.createElement('input');
  moveBackTaskTypeInput.value = type;
  moveBackTaskTypeInput.name = 'type';
  moveBackTaskTypeInput.type = 'hidden';
  
  // create a move backward button //
  var moveBackTaskButton = document.createElement('button');
  moveBackTaskButton.innerHTML = '←';
  moveBackTaskButton.type = 'submit';
  moveBackTaskButton.className = 'moveBackButton';
  
  moveBackTaskForm.appendChild(moveBackTaskIdInput);
  moveBackTaskForm.appendChild(moveBackTaskTypeInput);
  moveBackTaskForm.appendChild(moveBackTaskButton);
  
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);
  card.appendChild(cardAssignee);
  card.appendChild(cardId);
  card.appendChild(deleteTaskForm); // delete task
  
  if (type != 'archive'){
    card.appendChild(moveTaskForm); // move task to next
  }
  
  if (type != 'todo'){
    card.appendChild(moveBackTaskForm); // move task back
  }
  
  return card;
}

//// create a form function to handle when new task is submitted ////
function handleSubmit(event) {
  
  event.preventDefault();
  
  var newTaskObject = {
    title: event.target.title.value,
    desc: event.target.desc.value,
    assignee: event.target.assignee.value,
    id: 'task' + uniqueIdCounter,
    type: 'todo'
  };
  
  uniqueIdCounter++;
  
  toDoList.push(newTaskObject);
    
  var newTitle = newTaskObject.title;
  var newDesc = newTaskObject.desc;
  var newAssignee = newTaskObject.assignee;
  var newId = newTaskObject.id;
  var newType = newTaskObject.type;
  
  var newTodoCard = createCardElement(newTitle, newDesc, newAssignee, newId, newType);
  
  renderColumns();
}

//// function that delete a task ////
function deleteCard(event){
  
  event.preventDefault();
  
  // switch case //
  switch(event.target.type.value){
    case 'todo': // checking type is 'todo'
     toDoList = toDoList.filter(function(task){
       return task.id != event.target.id.value;
     });
     break;
      
    case 'inprogress': // checking type is 'inprogress'
     inProgressList = inProgressList.filter(function(task){
       return task.id != event.target.id.value;
     });
     break;
      
    case 'completed': // checking type is 'completed'
     completedList = completedList.filter(function(task){
       return task.id != event.target.id.value;
     });
     break;
    
   case 'accepted': // checking type is 'accepted'
     acceptedList = acceptedList.filter(function(task){
       return task.id != event.target.id.value;
     });
     break;
      
    case 'archive': // checking type is 'archive'
     archiveList = archiveList.filter(function(task){
       return task.id != event.target.id.value;
     });
     break;

  }
  renderColumns();
}

//// function that move a task to next column ////
function moveCard(event){
  
  event.preventDefault(); // prevent redirect after submission
  
//   console.log(event.target.id.value); // this is to test if we are passing the value 
//   console.log(event.target.type.value); // this is to test if we are passing the value 
  
   // switch case //
  switch(event.target.type.value){
    case 'todo': // checking type is 'todo'
     var taskToMove = toDoList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMove.type = 'inprogress';
     inProgressList.push(taskToMove);
      
     break;
      
    case 'inprogress': // checking type is 'inprogress'
      var taskToMove = inProgressList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMove.type = 'completed';
     completedList.push(taskToMove);
      
     break;
      
    case 'completed': // checking type is 'completed'
      var taskToMove = completedList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMove.type = 'accepted';
     acceptedList.push(taskToMove);
      
     break;
    
   case 'accepted': // checking type is 'accepted'
     var taskToMove = acceptedList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMove.type = 'archive';
     archiveList.push(taskToMove);
      
     break;
      
    case 'archive': // if ype is 'archive', then don't do anything
     break;
  }
  renderColumns();
}

//// function that move a task to prior column ////
function moveBackCard(event){
  
  event.preventDefault(); // prevent redirect after submission

   // switch case //
  switch(event.target.type.value){
    case 'todo': // if ype is 'todo', then don't do anything
     break;
      
    case 'inprogress': // checking type is 'inprogress'
      var taskToMoveBack = inProgressList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMoveBack.type = 'todo';
     toDoList.push(taskToMoveBack);
      
     break;
      
    case 'completed': // checking type is 'completed'
      var taskToMoveBack = completedList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMoveBack.type = 'inprogress';
     inProgressList.push(taskToMoveBack);
      
     break;
    
   case 'accepted': // checking type is 'accepted'
     var taskToMoveBack = acceptedList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMoveBack.type = 'completed';
     completedList.push(taskToMoveBack);
      
     break;
      
    case 'archive': // checking type is 'archive'
      var taskToMoveBack = archiveList.find(function(task){
       return task.id == event.target.id.value;
     });
      
     deleteCard(event);
      
     taskToMoveBack.type = 'accepted';
     acceptedList.push(taskToMoveBack);
      
     break;
  }
  renderColumns();
}

var newTaskForm = document.createElement('form');
newTaskForm.onsubmit = handleSubmit;

var titleInput = document.createElement('input');
titleInput.placeholder = 'title';
titleInput.name = 'title';
titleInput.required = true;

var descInput = document.createElement('input');
descInput.placeholder = 'description';
descInput.name = 'desc';
descInput.required = true;

var assigneeInput = document.createElement('input');
assigneeInput.placeholder = 'assignee';
assigneeInput.name = 'assignee';
assigneeInput.required = true;

var submitButton = document.createElement('button');
submitButton.innerHTML = 'Add task';
submitButton.type = 'submit';

newTaskForm.appendChild(titleInput);
newTaskForm.appendChild(descInput);
newTaskForm.appendChild(assigneeInput);
newTaskForm.appendChild(submitButton);
formContainer.appendChild(newTaskForm);
