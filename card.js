const card = (title1, img1, text1, button1, img2,text2, button2, img3,text3, button3 )=>{
    let div = document.createElement("div")
    div.innerHTML=`  
                     <h1 class="head1">${title1}</h1>

                    <div class="div1">
                    <img class="img1" src="images.jpg" ${img1}}>
                    <p class="para1">${text1}</p>
                    <button class="btn1">${button1}</button>
                    </div>

                    <div class="div1">
                    <img class="img1" src="images.jpg" ${img2}}>
                    <p class="para2">${text2}</p>
                    <button class="btn2">${button2}</button>
                    </div>

                    <div class="div1">
                    <img class="img3" src="images.jpg" ${img3}>
                    <p class="para3">${text3}</p>
                    <button class="btn3">${button3}</button>
                    </div>
    `
return div

}
export{card}