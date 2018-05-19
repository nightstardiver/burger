let teamAccoJS = () => {
    let teamList = document.querySelector(".team-acco");

    teamList.addEventListener("click", e => {
        e.preventDefault();
        let target = e.target;
        let item = target.closest(".team-acco_item");
        let items = document.querySelectorAll(".team-acco_item");
        if (!item.classList.contains("is-active")){
            for (let i=0; i<item.lenght; i++){
item[i].classList.remove("is-active");
        }
        item.classList.add("is-active");
    }else{
        item.classList.remove("is-active");
    }
    });
};
teamAccoJS();