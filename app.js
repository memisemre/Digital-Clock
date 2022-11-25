setInterval(()=>{
    const date = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    document.querySelector(".hour").innerHTML = date.getHours();
    if(date.getHours()<=9){
        document.querySelector(".hour").innerHTML = `0${date.getHours()}`;
    }

    document.querySelector(".minute").innerHTML = date.getMinutes();
    if(date.getMinutes() <=9){
        document.querySelector(".minute").innerHTML = `0${date.getMinutes()}`;
    }
    document.querySelector(".second").innerHTML  = date.getSeconds();
    if(date.getSeconds() <=9){
        document.querySelector(".second").innerHTML = `0${date.getSeconds()}`;
    }
    document.querySelector(".date-day").innerHTML = date.getDate();
    document.querySelector(".date-year").innerHTML = date.getFullYear();
    let monthsIndex = date.getMonth()
    document.querySelector(".date-month").innerHTML = months[monthsIndex]
},1000)
