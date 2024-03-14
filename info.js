const divright = (title, text, button, )=>{
    let div = document.createElement("div")
    div.className="margin"
    div.innerHTML=`<h1>${title}</h1>
                    <p class="para1">${text}</p>
                     <button class="btn">${button}</button>
    
    
    `

return div
}
export{divright}