window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const color = [
        "#69d3be",
        "#ebbf79",
        "#6c90f1",
        "#79ace0",
        "#f07b6f",
        "#d6bf63"
    ];

    // Lets get going with the sound here
    pads.forEach((pad, index) =>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime =0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // Create a function that make a bubbles
    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this)
        });
    };
});