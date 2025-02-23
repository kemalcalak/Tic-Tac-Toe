# Tic-Tac-Toe

Tic-Tac-Toe is a classic game application that users can play in their web browsers. This project is developed using the React library.

## Contents
- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components](#components)
- [License](#license)
- [Contact](#contact)

## About the Project
This project allows two players to take turns using X and O marks to play a game on a 3x3 board. Players take turns marking cells and aim to win by aligning three marks horizontally, vertically, or diagonally.

## Installation
Follow the steps below to run the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kemalcalak/Tic-Tac-Toe.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Tic-Tac-Toe
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm run dev
   ```

## Usage
When the application starts, two players can choose to play with X and O. Each player takes turns selecting a cell on the board to play. The game is won when a player aligns three marks horizontally, vertically, or diagonally.

## File Structure
The project directory is structured as follows:

```
Tic-Tac-Toe/
├── src/                         # Application source code
│   ├── components/              # Game components
│   │   ├── GameBoard.jsx        # Game board component
│   │   ├── GameOver.jsx         # Game status component
│   │   ├── Log.jsx              # Reset game button component
│   │   ├── Player.jsx           # Player indicator component
│   │   └── winning-combinations # Winning patterns data
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   ├── index.css                # Global styles
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration file
└── README.md                    # Project documentation
```

## Components
-   **GameBoard.jsx**: Represents the game board and manages the game logic.
-   **GameOver.jsx**: Displays the game status (e.g., winner or draw message).
-   **Log.jsx**: Handles game history and reset functionality.
-   **Player.jsx**: Displays which player’s turn it is.
-   **winning-combinations**: Stores winning patterns for game logic.

## License
This project is licensed under the MIT License. For more details, check the [LICENSE](LICENSE) file.

## Contact
For inquiries or support, feel free to reach out through [kemalcalak.com](https://kemalcalak.com/contact).
