const inputs = document.querySelectorAll(".code") // NodeList

// function moveInput(){
//     [].addEventListener
// }


for(let i = 0; i < inputs.length; i++){
    const input = inputs[i] // 3

    input.addEventListener("keydown", (event) => {
        if(event.key == 'Backspace'){
            setTimeout(()=>{
                const prevInput = inputs[i - 1]
                if(prevInput) {
                    prevInput.focus()
                }
            }, 10)
        } else if (event.key >= 0 && event.key <= 9) {
            input.value = ''

            setTimeout(()=>{
                const nextInput = inputs[i + 1]
                if(nextInput) {
                    nextInput.focus()
                }
            }, 10)
        }
    })

    input.addEventListener("paste", (event)=>{
        event.preventDefault()
        const paste = event.clipboardData.getData("text") // "1234567890"

        for(let j = i; j < (paste.length + i); j++){
            const input = inputs[j]
            if(input) {
              input.value = paste[j - i]
            }
        }
    })
}
