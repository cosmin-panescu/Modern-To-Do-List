// -----------------------------
// ----------SELECTORS---------- 
// -----------------------------
const checkBox = document.getElementById('checkbox');
const backgroundMusic = document.getElementById('background-music');
const musicCheckbox = document.getElementById('music-checkbox');
const themeStyleCss = document.getElementById('theme-style');
const ball = document.querySelector('.ball');
const musicBall = document.querySelector('.music-ball');
const tasksList = document.getElementById('list');
const taskInput = document.getElementById('input');
const addToDoBtn = document.getElementById('add-to-do-btn');
const errorMessage = document.querySelector('.error-message-div');
const checkDeleteBtns = document.querySelector('.task-buttons');
const currentDate = document.getElementById('current-date');

backgroundMusic.volume = 0.01; // music volume

// Date variables + getting the current month and the day of the month
var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
const date = new Date();
const monthNumber = date.getMonth();
let month = months[monthNumber];
const day = date.getDate();
let dayAndMonth = `${day} ${month}`;

currentDate.innerHTML = dayAndMonth;


// -----------------------------------
// ----------EVENT LISTENERS----------
// -----------------------------------
checkBox.addEventListener('change', changeTheme);
musicCheckbox.addEventListener('change', playPauseMusic);
addToDoBtn.addEventListener('click', addTask);
tasksList.addEventListener('click', checkDelete);

document.addEventListener('keyup', function(event) { // Press ENTER to add a new task
    if(event.keyCode == 13) {
        addTask();
    }
});

// -----------------------------
// ----------FUNCTIONS----------
// -----------------------------
function addTask() {
    if (taskInput.value === '') { // check input emptiness 
        errorMessage.style.visibility = 'visible';
        errorMessage.style.transform = 'translateY(0)';
        
        setTimeout(() => { // Making error message disappear
            errorMessage.style.opacity = 0;
            errorMessage.style.transform = 'translateY(70%)';
            errorMessage.style.transition = 'all .5s ease-out';
            errorMessage.style.visibility = 'hidden';
        }, 3000);
        errorMessage.style.opacity = 1;
        // addTask();   
        return;
        
    } else {    
        // Creating the whole "li" (task) element and append it to the "ul" (list parent)
        const task = document.createElement('li');
        task.classList.add('item');
        
        const taskText = document.createElement('p');
        taskText.classList.add('text');
        taskText.innerText = taskInput.value;
        
        const btnsDiv = document.createElement('div');
        btnsDiv.classList.add('task-buttons');
        
        const checkBtn = document.createElement('a');
        checkBtn.classList.add('check-btn');
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        
        const deleteBtn = document.createElement('a');
        deleteBtn.classList.add('trash-btn');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        
        btnsDiv.appendChild(checkBtn);
        btnsDiv.appendChild(deleteBtn);
        task.appendChild(taskText);
        task.appendChild(btnsDiv);
        
        tasksList.appendChild(task);
        
        taskInput.value = ''; // delete previous task's text from user's input 
    }
}

function checkDelete(e) {
    const currentBtn = e.target;
    // Delete Task
    if (currentBtn.classList == 'check-btn') {
        const toDo = currentBtn.parentElement.parentElement;
        toDo.classList.toggle('completed');
        // Check mark Task 
    } else if (currentBtn.classList == 'trash-btn') {
        const toDo = currentBtn.parentElement.parentElement;
        toDo.remove();
    }
}

// Switch Light-Dark mode
checkBox.checked = false;

function changeTheme() {
    if (!checkBox.checked) {
        themeStyleCss.href = '';
        ball.style.transform = 'translateX(0px)';
    } else {
        themeStyleCss.href = 'css/theme.css';
        checkBox.checked = true;
        ball.style.transform = 'translateX(24px)';
    }
}

// Play/ Pause music
musicCheckbox.checked = true;

function playPauseMusic() {
    if (!musicCheckbox.checked) {
        backgroundMusic.play();
        musicBall.style.transform = 'translateX(24px)';
        musicCheckbox.checked = false;
    } else {
        musicBall.style.transform = 'translateX(0px)';
        backgroundMusic.pause();
    }
}

// Rain Effect
function createRainElement() {
    const rainElement = document.createElement('div');
    rainElement.classList.add('rain-element');
    rainElement.innerText = "💎";
    document.body.appendChild(rainElement);
    rainElement.style.left = Math.random() * 100 + "vw";
    rainElement.style.animationDuration = Math.random() * 2 + 6 + "s";
    setTimeout(() => {
        rainElement.remove();
    }, 8000);
}
setInterval(createRainElement, 800);




































