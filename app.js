let userWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")


function updateWord(element) {
      usersWord = element.value

      console.log(usersWord)
    }
  

function handleSubmit() {
    let newListItem = document.createElement('li')
    newListItem.innerText = usersWord

     if(usersWord.length % 2 === 0) {
     evenList.appendChild(newListItem)
     document.getElementById("even").style.color = "orange"
    } else {
      oddList.appendChild(newListItem)
      document.getElementById("odd").style.color = "blue"
    }
    
    
    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }
