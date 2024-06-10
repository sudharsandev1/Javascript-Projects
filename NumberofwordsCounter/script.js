const wordsTextarea=document.querySelector(".word-counter .words")
const countBtn=document.querySelector(" .word-counter .count-btn");
const wordCount=document.querySelector(".word-counter .word-count span");


const countWords = () =>{
    let words = wordsTextarea.value;
    let wordsTrimmed=words.replace(/\s+/g,"").trim();

    let splitWords=wordsTrimmed.split(" ");
    let numberofWords=splitWords.length;
    if(splitWords[0]==""){
        numberofWords=0;
    }
    wordCount.innerHTML=numberofWords;

};
countBtn.addEventListener("click",countWords);