const parag = document.querySelector(".js_text");
const logicPrint = {
  arrText: ["Hello, Max.", "Please, check my homework =)"],
  start() {
    let counterLetters = 0;
    let counterEl = 0;

    setInterval(() => {
      counterLetters += 1;

      const lengthEl = this.arrText[counterEl].length;
      const letters = this.arrText[counterEl].slice(0, counterLetters);

      if (lengthEl === counterLetters) {
        counterLetters = 0;

        this.arrText.length === counterEl + 1
          ? (counterEl = 0)
          : (counterEl += 1);
      }

      this.printText(letters);
    }, 120);
  },

  printText(letters) {
    parag.textContent = letters;
  },
};

logicPrint.start();
