let sectionOne = document.getElementById("sectionOne")

import {  divright} from "./info.js"
import { divleft } from "./img.js"

const data = {
title: "The Business Man",
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat tempore nostrum qui dolore perspiciatis repellat fugiat quidem illum maiores consectetur explicabo, deleniti magnam cumque debitis quod exercitationem recusandae ipsam?",
button: "Contact Us",
img: "imgs.png"
}


    
const {title, text, button, img}=data
sectionOne.append(divright(title, text, button))
sectionOne.append(divleft(img))



let sectionTwo = document.getElementById("sectionTwo")
import { card } from "./card.js"

const cards = {
    title1: "PROJECT COMPLETE",
    img1: "images.jpg",
    text1: "lorem , deleniti magnam cumque debitis quod exercitationem recusandae ipsam?",
    button1: "Learn More",
    img2: "images.jpg",
    text2: "lorem  explicabo, deleniti magnam cumque debitis quod exercitationem recusandae ipsam?",
    button2: "Learn More",
    img3: "images.jpg",
    text3: "lorem  explicabo, deleniti magnam cumque debitis quod exercitationem recusandae ipsam?",
    button3: "Learn More",
    }

const {title1, img1, text1, button1, img2,text2, button2, img3,text3, button3}=cards
sectionTwo.append(card(title1, img1, text1, button1, img2,text2, button2, img3,text3, button3))