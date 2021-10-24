const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

//Question 1

let cat = {
	complain() {
		console.log("Meow!");
	},
};

cat.complain();

//Question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
console.log(heading);

//Question 3
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
heading.style.fontSize = "2rem";
console.log(heading);

//Question 4
const subheading = document.querySelector("subheading");
console.dir(subheading.className);
subheading.className = "subheadingclass";
console.log(subheadingclass.className);

//Question 5
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

//Question 6
let resultContainer = document.querySelector(".results");
console.log(resultContainer.innerHTML);
resultContainer.innerHTML = "<p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";

//Question 7
function myList(list) {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
}
myList(cats);

//Question 8

function createCats(cats) {
	let html = "";
	for (let i = 0; i < cats.length; i++) {
		let catsAge = "Age unknown";

		if (cats[i].age) {
			catsAge = cats[i].age;
		}

		html += `<div>
            <h5>Name:${cats[i].name}</h5>
            <p>Age:${catsAge}</p>
            </div>`;
	}

	return html;
}

const newCats = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newCats;
