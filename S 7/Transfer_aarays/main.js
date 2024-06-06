


// dom nodes
const left = document.querySelector(".left > ul");
const right = document.querySelector(".right > ul");
const actions = document.querySelector('.actions > ul')

// functions
function renderOptions() {

    // render left column
    const leftOptions = OPTIONS.filter(option => option.column === 'left')
    const leftTemplate = leftOptions.map(option => {
        return `
        <li>
            <input onClick='handleCheck(event)' type='checkbox' name='${option.title}' ${option.isChecked ? 'checked' : ''} />${option.title}
        </li>`
    })
    left.innerHTML = leftTemplate.join("")


      // render right column
      const rightOptions = OPTIONS.filter(option => option.column === 'right')
      const rightTemplate = rightOptions.map(option => {
          return `
            <li>
                <input onClick='handleCheck(event)' type='checkbox' name='${option.title}' ${option.isChecked ? 'checked' : ''} />${option.title}
            </li>
          `
      })
      right.innerHTML = rightTemplate.join("")
}

function renderActions() {

    const isLeftEmpty = OPTIONS.every(option => option.column === 'right');
    const isRightEmpty = OPTIONS.every(option => option.column === 'left');

    const template = `
        <li><button class="${isLeftEmpty ? 'disabled' : ''}" onClick="handleMove('right')">></button></li>
        <li><button class="${isLeftEmpty ? 'disabled' : ''}" onClick="handleMoveAll('right')">>></button></li>
        <li><button class="${isRightEmpty ? 'disabled' : ''}" onClick="handleMove('left')"><</button></li>
        <li><button class="${isRightEmpty ? 'disabled' : ''}" onClick="handleMoveAll('left')"><<</button></li>

        `;
    actions.innerHTML = template;
}


function handleMoveAll(column){
   OPTIONS = OPTIONS.map(option => ({...option, column}));
   renderActions();
   renderOptions();
}


function handleMove(column) {
    OPTIONS = OPTIONS.map(option => {
        if(option.isChecked) {
            return {...option, column}
        } else {
            return option
        }
    });
    renderActions();
    renderOptions();
}

function handleCheck(event) {
    // const name = event.target.name;
    // const checked = event.target.checked;

    // es6 destructuring
    const {name, checked} = event.target;
    debugger;
    const findedOption = OPTIONS.find(option => option.title === name)
    findedOption.isChecked = checked;

}






// events
window.addEventListener("load", renderOptions);
window.addEventListener("load", renderActions);
