var body = document.querySelector("body");
body.style.margin = "0";
body.style.display = "grid";
/* body.style.gridTemplateColumns = "repeat(5, 1fr)"; */
body.style.gridTemplateColumns = "repeat(auto-fill, minmax(10rem,1fr))";
fizzBuzz(1000);

function fizzBuzz(goTo = 15) {
    for (let i = 1; i <= goTo; i++) {
        let text = document.createElement("h1");
        //text.innerHTML = "Hello";
        //document.body.appendChild(text);
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            text.innerHTML = "FizzBuzz";
            text.style.background = "lightblue";
        } else if (i % 3 == 0) {
            console.log("Fizz");
            text.innerHTML = "Fizz";
            text.style.background = "lightgreen";
        } else if (i % 5 == 0) {
            console.log("Buzz");
            text.innerHTML = "Buzz";
            text.style.background = "lightpink";
        } else {
            console.log(i);
            text.innerHTML = i;
            text.style.background = "hsla(40,100%,80%,100%)";
        }
        text.style.textAlign = "center";
        text.style.padding = "0.5rem";
        text.style.fontFamily = "sans-serif";
        text.style.margin = "0";
        text.style.outline = "2px dashed black";
        text.style.cursor = "default";
        text.setAttribute("onclick", "deleteObject(this)");
        //text.style.transition = "all 500ms";
        document.body.appendChild(text);
    }
}

/* function deleteObject(x){
    console.log(x);
    x.style.opacity = "0%";
    if(x.style.opacity == "0%"){
        console.log("hi");
    }
} */

/* function deleteObject(x, speed = 500){
    var seconds = speed/1000;
    x.style.transition = "opacity "+seconds+"s ease";

    x.style.opacity = 0;
    setTimeout(function() {
        x.parentNode.removeChild(x);
    }, speed);
} */

function deleteObject(x, speed = 1000) {
    var seconds = speed / 1000;
    x.style.transition = "opacity " + seconds + "s ease";

    x.style.opacity = 0;
    setTimeout(function () {
        x.parentNode.removeChild(x);
    }, speed);
}
