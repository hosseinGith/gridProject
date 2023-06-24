const btnAddContent = document.querySelector('.link');
const boxAddcontent = document.querySelector('.contadd');
const adder = document.querySelector('.adder');
const mainContainer = document.querySelector('.container');
const addimg = document.querySelector('.add');
const circle = document.querySelector('.circle');
const chatArea = document.querySelector('.chat_area');
const textcontent = document.querySelector('textarea');
const daycontent = document.querySelectorAll('.day');
const timecontent = document.querySelectorAll('.time');
const removeElement = document.querySelectorAll('.removeElement')
const namContent = document.getElementById('nameContact');


let date = new Date();
let day= '';;
let hour =  date.getHours() + ' : ' + date.getMinutes();



switch(date.getDay()){
    case 1:
        day = 'monday'
    break;
    case 2:
        day = 'tusday'
    break;
    case 3:
        day = 'wednsday'
    break;
    case 4:
        day = 'thersday'
    break;
    case 5:
        day = 'friday'
    break;
    case 6:
        day = 'saturday'
    break;
    case 7:
        day = 'sunday'
    break;
}
daycontent[0].innerHTML= day;
timecontent[0].innerHTML = hour;
function addDiv(){
   
    let date = new Date()
    let day= '';

    const div = document.createElement('div')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const i = document.createElement('i')
    const h3 = document.createElement('h3')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3abuotmember = document.createElement('p')
    
    div.classList.add('removeElement')
    div1.classList.add('top_info')
    div2.classList.add('left_info')
    div3.classList.add('circle')
    div4.classList.add('right_info')
    i.classList.add('fa')
    i.classList.add('fa-remove')
    i.classList.add('remove')
    p3abuotmember.classList.add('content')
    i.addEventListener('click',()=>{
        div.remove()
    })
    
    div1.appendChild(div2)
    div1.appendChild(div4)
    div1.appendChild(p3abuotmember)
    div2.appendChild(div3)
    div2.appendChild(h3)
    div2.appendChild(p1)
    div2.appendChild(p2)
    div.appendChild(div1)
    div.appendChild(i)
    chatArea.appendChild(div)
 

    switch(date.getDay()){
        case 1:
            day = 'monday'
        break;
        case 2:
            day = 'tusday'
        break;
        case 3:
            day = 'wednsday'
        break;
        case 4:
            day = 'thersday'
        break;
        case 5:
            day = 'friday'
        break;
        case 6:
            day = 'saturday'
        break;
        case 7:
            day = 'sunday'
        break;
    }

    h3.innerHTML = namContent.value
    p3abuotmember.innerHTML = textcontent.value
    p1.innerHTML =day+' '
    p2.innerHTML = date.getHours() + ' : ' + date.getMinutes()
};

btnAddContent.addEventListener('click',()=>{
    boxAddcontent.classList.add('show')
    mainContainer.style.filter = 'blur(6px)'
})

addimg.addEventListener('click',()=>{
    if(textcontent.value == '' || namContent.value == ''){ alert('enter all')
    return
    }
    addDiv()
        mainContainer.style.filter = 'blur(0px)'
        boxAddcontent.classList.remove('show')
})
window.addEventListener('click',(e)=>{
    if(boxAddcontent == e.target || adder == e.target){
        boxAddcontent.classList.remove('show')
        mainContainer.style.filter = 'blur(0px)'
    }
})
