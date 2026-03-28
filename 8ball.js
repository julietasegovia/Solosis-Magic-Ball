const answers = ["yaasss", "ew, no", "idunno", "likely", "prolly not"];

window.onload = function (){
    let typeHere = this.document.querySelector("#type-here");
    let solosis = this.document.querySelectorAll(".solosis");
    let askButton = this.document.querySelector("#ask-solosis");
    let solosisAnswer = this.document.querySelector("#the-wisdom");
    let solosisFront = this.document.querySelector("#solosis-front");
    let solosisBack = this.document.querySelector("#solosis-back");

    typeHere.placeholder = "Type your question here..."

    typeHere.addEventListener("click", () => {
                                if(typeHere.value === "Type your question here..."){
                                    typeHere.value = "";
}
    })

    askButton.addEventListener("click", () => {
                                if(askButton.textContent === "Send question!"){
                                    const answerIndex = Math.floor(Math.random() * answers.length);
                                    solosisAnswer.textContent = answers[answerIndex];
                                    solosisFront.classList.add("solosis-front-clicked");
                                    solosisBack.classList.add("solosis-back-clicked");
                                    this.setTimeout(()=>{
                                        askButton.textContent = "Ask again?";
                                    }, 3000);
                            }
                                else if(askButton.textContent === "Ask again?"){
                                    typeHere.value = "Type your question here...";
                                    solosisBack.classList.remove("solosis-back-clicked");
                                    solosisFront.classList.remove("solosis-front-clicked");
                                    askButton.textContent = "Send question!";
                                }
    });
}