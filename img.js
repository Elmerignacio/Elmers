const divleft = (img)=>{
    let div = document.createElement("div")
    div.innerHTML=`<img class="imgs"src="imgs.png"${img}}>
                    

    `

return div
}
export{divleft}