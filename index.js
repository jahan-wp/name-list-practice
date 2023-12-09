let mySpeech = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let callSpeech = JSON.parse(localStorage.getItem("speech"))
if (!callSpeech == "") {
  mySpeech = callSpeech
  renderLeads()
}

btnEl.addEventListener("click", () => {
  if (!inputEl.value == "") {
    mySpeech.push(inputEl.value)
    localStorage.setItem("speech", JSON.stringify(mySpeech))
    inputEl.value = ""
    renderLeads()
  }
})

function renderLeads() {
  ulEl.innerHTML = ""
  for (let i = 0; i < mySpeech.length; i++){
    ulEl.innerHTML+= "<li>" + mySpeech[i] + "</li>"
  }
}

deleteBtn.addEventListener("click", () => {
  mySpeech = []
  localStorage.clear()
  renderLeads()
})