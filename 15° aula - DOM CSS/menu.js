let sideBar = document.getElementById('mySideBar');
let main = document.getElementById('main')

function openNav(){
    sideBar.style.width = '250px'
    main.style.marginLeft = '250px'
}

function closeNav(){
    sideBar.style.width = '0'
    main.style.marginLeft = '0'
}