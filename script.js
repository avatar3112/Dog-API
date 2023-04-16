//  console.log('hello')
//  https://dog.ceo/api/breeds/image/random
// .then - promises
// asynchronous programming

const dogimageDiv=document.querySelector('.dogimage')
const dogbutton=document.querySelector('.dogbutton')

const getnewdog = () => {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => {
            console.log(json.message)
            dogimageDiv.innerHTML=`<img src='${json.message}' height=250 width=200 />`
        })
}
    dogbutton.onclick=()=>getnewdog()
    



