const form = document.querySelector("form")
const itemName = document.getElementById("item-name")
const addButton = document.getElementById("submit")
const itemList = document.getElementById("list")
const exclusionWarning = document.querySelector(".exclusion-message")

const startItemList = ["Café preto", "Suco de laranja", "Bolacha"]

populateStartItemList()
function populateStartItemList() {
	for (let index = 0; index < startItemList.length; index++) {
		addItem(startItemList[index])
	}
}

form.onsubmit = (event) => {
	event.preventDefault()

	if (itemName.value == "") return

	addItem(itemName.value)
}

function addItem(item) {
	const li = document.createElement("li")
	li.innerHTML = `
            <input type="checkbox" class="check-item" name="check-item" onchange="toggleLineThrough(this)"/>
            <span>${item}</span>
            <button type="button" onclick="removeItem(this)">
            <img src="./assets/icons/trash.svg" alt="" />
            </button>
        `

	itemList.prepend(li)
	itemName.value = ""
}

function toggleLineThrough(element) {
	console.log("toggleLineThrough")
	const span = element.nextElementSibling // pega o elemento logo abaixo (ou ao lado)
	span.classList.toggle("line-through")
}

function removeItem(element) {
	element.closest("li").remove()
	exclusionWarning.classList.remove("hidden")
}

function hideExclusionWarning() {
	exclusionWarning.classList.add("hidden")
}
