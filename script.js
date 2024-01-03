let box=document.querySelector(".option");

let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");

let text=document.querySelector(".text");

let image1=document.querySelector(".image1");
let image2=document.querySelector(".image2");

rock.addEventListener('click',function show(){
    text.innerHTML= "<h1>Wait !!! </h1>";
    image1.classList.add("img1");
    image2.classList.add("img2");
    image1.src="images/rock.png";
    image2.src="images/rock.png";
    let target= Math.round(Math.random()*2);
    setTimeout((target)=> {
        image1.classList.remove("img1");
        image2.classList.remove("img2");
        image1.src="images/rock.png"
        if (target==0){
            image2.src="images/paper.png"
            text.innerHTML= "<h1> CPU Won !!! </h1>";
        }
        else if (target==1){
            image2.src="images/rock.png"
            text.innerHTML= "<h1>Its a Draw !!!</h1>";
        }
        else {
            image2.src="images/scissors.png"
            text.innerHTML= "<h1> You Won !!!</h1>";
        }
    },4700)
})

paper.addEventListener('click',function show(){
    text.innerHTML= "<h1>Wait !!! </h1>";
    image1.classList.add("img1");
    image2.classList.add("img2");
    image1.src="images/rock.png";
    image2.src="images/rock.png";
    let target= Math.round(Math.random()*2);
    setTimeout ((target) => {
        image1.classList.remove("img1");
        image2.classList.remove("img2");
        image1.src="images/paper.png"
        if (target==0){
            image2.src="images/paper.png"
            text.innerHTML= "<h1> Its a Draw !!! </h1>";
        }
        else if (target==1){
            image2.src="images/rock.png"
            text.innerHTML= "<h1> You Won !!! </h1>";
        }
        else {
            image2.src="images/scissors.png"
            text.innerHTML= "<h1> CPU Won !!! </h1>";
        }
    }, 4700)
})

scissor.addEventListener('click',function show(){
    text.innerHTML= "<h1>Wait !!! </h1>";
    image1.classList.add("img1");
    image2.classList.add("img2");
    image1.src="images/rock.png";
    image2.src="images/rock.png";
    let target= Math.round(Math.random()*2);
    setTimeout((target) => {
        image1.classList.remove("img1");
        image2.classList.remove("img2");
        image1.src="images/scissors.png"
        if (target==0){
            image2.src="images/paper.png"
            text.innerHTML= "<h1> You Won !!! </h1>";
        }
        else if (target==1){
            image2.src="images/rock.png"
            text.innerHTML= "<h1> CPU Won !!! </h1>";
        }
        else {
            image2.src="images/scissors.png"
            text.innerHTML= "<h1> Its a Draw !!! </h1>";
        }
    }, 4700);
})

