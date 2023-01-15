let inputText  = document.getElementById("input-text");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

inputText.addEventListener("input",()=>{
    charCount.textContent = inputText.value.length;

    let wc = inputText.value;
    wc = wc.match(/\w+/g);
    wc = wc.filter((n)=>{return n!=''}).length
    wordCount.innerHTML = wc ;
})

