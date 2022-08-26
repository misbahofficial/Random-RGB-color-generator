// step 1: create onload function
window.onload = () => {
    main();
}

// step 2: create main function with all meain functionalities
function main(){

    const root = document.getElementById('root');
    const btn = document.getElementById('btn');
    const currentColor = document.getElementById('current-color');

    btn.addEventListener('click', function(){
        const bgColor = randomColorGenerator();
        root.style.backgroundColor = bgColor;
        currentColor.textContent = bgColor;
        btn.style.color = bgColor;
    })

}

// step 3: create random color generator function
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// step 4: collect all necessary references

// step 5: add event listener