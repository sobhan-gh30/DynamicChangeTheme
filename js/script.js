const changeThemBtn = document.querySelectorAll(".btn");
changeThemBtn.forEach(function (btn){
    btn.addEventListener("click" , function(event){
        document.documentElement.style.setProperty("--theme-color" , event.target.dataset.color)
    })
})

