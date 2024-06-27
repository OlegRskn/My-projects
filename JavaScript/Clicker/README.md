# Clicker Game

This code implements a simple game where the player has to click a button to increase their score. The game also includes a timer that counts down the time until the game ends.

## Variables

- **score**: Stores the current score of the player.
- **timer**: Stores the remaining time until the game ends.
- **timerActive**: A flag indicating whether the timer is active or not.

## Functions

### `finishTheGame(event)`

The function that is called when the game ends. It toggles the "active" class on the element with the "score" class.

### `startTimer(timer)`

The function responsible for the timer countdown. It decrements the timer value by 1 every second and calls itself again. When timer reaches 0, it calls `finishTheGame()`.

### `clickHandler()`

The function that is called when the button is clicked. It increments the player's score and, if the timer is not active, starts it using `startTimer()`.

### `setTime()`

The function that creates a new `<div>` element in the footer and displays the current time.

### `changeTime()`

The function that updates the time in the footer every second.

### `init()`

The function that initializes the game. It adds a click handler to the button, calls `setTime()`, and `changeTime()`.

## Usage

- When the page loads, the game is initialized, and the time starts to display in the footer.
- When the player clicks the button, the score is increased, and if the timer is not active, it is started.
- When the timer reaches 0, the game ends, and the element with the "score" class toggles its "active" class.
