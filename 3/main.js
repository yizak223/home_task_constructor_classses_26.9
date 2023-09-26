btnSubmit.addEventListener('click',(e)=>{
        e.preventDefault()
        mainDiv.innerHTML+=`
        <h1>${nameUser.value}<h1>
        <h2>${lastName.value}</h2>`
})

