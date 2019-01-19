# Word-Guess-Game

### https://izeimai.github.io/Word-Guess-Game/


*What does this project do?*

This is a simple hangman style game where a user can press any alphabet key to guess the random word. 
There are three pre-set words that are chosen randomly and is assigned as the "mystery word".
The Mystery word manifests itself in the screen as a series of underscores that match the number of letters in the word.
If the user types in the correct key that corresponds to a letter of the mystery word, that letter replaces the corresponding underscore position.
Non-alphabet keys and keys that were previously pressed do not count against the number of remaining guesses.
The game restarts itself at the end of the game and also keeps count of how many games were won in a given session.

*Why is this project useful?*

It teaches how to link a separate JavaScipt file and create dynamic elements in the HTML.
I also found it easier to conceptualize how to deal with the DOM manipulation portions before the logic.
In the beginning, I started off with the logic behind each key, but most of the work was making sure the arrays and variables were reflected in the web browser.
