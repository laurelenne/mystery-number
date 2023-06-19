function runTests() {
    const game = new GuessingGame(10, 100);
  
    // Test initialization
    console.assert(game.randomNumber !== null, "randomNumber should not be null");
    console.assert(game.triesCount === 0, "triesCount should be 0");
    console.assert(game.progress === 0, "progress should be 0");
    console.assert(game.$numberInputField.val() === '', "$numberInputField value should be empty");
    console.assert(game.$infoParagraph.text() === '', "$infoParagraph text should be empty");
    console.assert(game.$progressBar.css('width') === '0px', "$progressBar width should be 0px");
    console.assert(game.$tryButtons.children().length === 0, "$tryButtons should have no children");
    console.assert(game.$validationButton.css('display') === 'block', "$validationButton display should be block");
    console.assert($("#link-menu").length === 0, "#link-menu should not exist");
    console.assert($(".container-box").length === 0, ".container-box should not exist");
  
    // Test losing scenario
    for (let i = 0; i < game.maxTries; i++) {
      game.checkInput();
    }
    console.assert(game.$infoParagraph.text() === 'Perdu !', "$infoParagraph text should be 'Perdu !'");
    console.assert($("#link-menu").length === 1, "#link-menu should exist");
    console.assert($(".container-box").length === 1, ".container-box should exist");
  
    // Test winning scenario
    game.randomNumber = 50; // Set a specific random number for testing
    game.$numberInputField.val('50');
    game.checkInput();
    console.assert($(".container-box").length === 1, ".container-box should exist");
    console.assert($(".container-box p").text() === "BRAVO !", "Result message should display 'BRAVO !'");
  
    console.log("All tests passed!");
  }
  
  $(document).ready(function() {
    runTests();
  });