

const UNITS = [
    {
        title: 'Milimeter',
        value: 0.001
    },
    {
        title: 'Centimeter',
        value: 0.01
    },
    {
        title: 'Meter',
        value: 1
    },
    {
        title: 'Kilometer',
        value: 1000
    }
]


// dom nodes
const from = document.getElementById("from-select")
const to = document.getElementById("to-select");
const amount = document.getElementById("amount");
const result = document.getElementById("result");


// functions
function renderOptions() {
    const template = UNITS.map((unit) => {
        return `<option value='${unit.value}' >${unit.title}</option>`
    });   

    from.innerHTML = template.join("");
    to.innerHTML = template.join("");
}


function handleResult() {
    result.textContent = (from.value/to.value)* amount.value;
}


// events
renderOptions();