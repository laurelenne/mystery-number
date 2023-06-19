class GuessingGame {
  constructor(maxTries, maxNumber) {
    this.maxTries = maxTries;
    this.maxNumber = maxNumber;

    this.randomNumber = null;
    this.triesCount = 0;
    this.progress = 0;

    this.$numberInputField = $("#nbrIpt");
    this.$infoParagraph = $("#p-info");
    this.$validationButton = $("#btn-valid");
    this.$progressBar = $(".progress-bar");
    this.$tryButtons = $(".try-buttons");

    this.initialize();
  }

  initialize() {
    this.randomNumber = this.generateRandomNumber();
    this.triesCount = 0;
    this.progress = 0;
    this.$numberInputField.val('');
    this.$infoParagraph.text('');
    this.$progressBar.css('width', this.progress + 'px');
    this.$tryButtons.empty();
    this.$validationButton.css('display', 'block');
    $("#link-menu").remove();
    $(".container-box").remove();

    this.$validationButton.on("click", () => this.checkInput());
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * this.maxNumber) + 1;
  }

  checkInput() {
    const userInput = this.$numberInputField.val().trim();

    if (!userInput) {
      this.showInfo("Veuillez choisir un nombre.");
    } else if (!/^\d+$/.test(userInput)) {
      this.showInfo("Ce n'est pas un nombre valide.");
    } else {
      const numberInput = parseInt(userInput);

      this.triesCount++;
      this.progress += 10;
      this.$progressBar.css('width', this.progress + 'px');

      if (numberInput > this.randomNumber) {
        this.showInfo("Le nombre saisi est trop élevé.");
      } else if (numberInput < this.randomNumber) {
        this.showInfo("Le nombre saisi est trop bas.");
      } else {
        this.winOrLose("win");
        return;
      }

      if (this.triesCount >= this.maxTries) {
        this.showInfo("Perdu !");
        this.winOrLose("lose");
      }

      $('<div class="try-button btn btn-light">' + numberInput + '</div>').appendTo(this.$tryButtons);
    }

    this.$numberInputField.val('');
  }

  showInfo(message) {
    this.$infoParagraph.text(message);
  }

  winOrLose(state) {
    this.$validationButton.css('display', 'none');
    $('<a id="link-menu" class="btn btn-light" type="button" href="index.html">Retour au menu</a>').appendTo(".game-container");

    const resultMessage = state === 'win' ? "BRAVO !" : "PERDU !";
    $('<div class="container-box"><p class="' + state + '-message">' + resultMessage + '</p></div>').appendTo("body");
  }
}

const game = new GuessingGame(10, 100);
