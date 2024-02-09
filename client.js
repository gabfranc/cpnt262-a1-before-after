alert("Fruits Are Yummy!");

//before Values
let celebName = "Taylor Swift";
let celebAge = 34;


const celebNameEl = document.querySelector("#celebClass");
const celebNumEl = document.querySelector("#celebNum");

celebNameEl.textContent = celebName;
celebNumEl.textContent = celebAge;

//document.body.append(celebName);

document.body.prepend(celebName);
celebNameEl.id = "celebClass";