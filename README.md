
# Puzzle Quest - An interactive puzzle application

It is a website based an interactive puzzle application which explore the soft skills of the user like aptitude skills. It is like a treasure hunt where the user need to find the treasure using the clue provided.
This website analyses the soft skills of the user in a fun way.This is a user-friendly kind of application that is free to be modified. The gameplay is simple you just need to find the treasure hidden in the tile. The player can play the game using mouse, you just only need to use the Left Mouse Button to dig and locate the treasure. Your main goal in the game is to find and locate the treasure before your life runs out. You will be given a limited amount of life enough to get your treasure. Each dig will deduct your lifebar and will decrease continuously if the treasure is not found yet. There is a hint each time you dug, try to follow the hint in order to get your treasure.


## Tech Stack

**Client:** HTML, CSS, javaScript, hbs, jQuery, Bootstrap 

**Server:** Node, Express 

**Code Editor/Tools :** VS Code,Command Prompt,PowerShell

**Database:** MongoDb (shell and Compass)



## Features

- Login and Signup 
- Email and password verification from database
- Score and Timer
- Scoreboard/LeaderBoard
- astounding UI
- Basic GUI
-- The project contains a Images and Button Elements.
- Basic Controls
-- This project uses a basic controls to interact with the game.
- User-friendly Interface
--This project was design in a simple user-friendly interface web application.


## Solutions and Dead-End
- The solution is similar to the wumpus world in AI
* A 5*5 grid of rooms . The agent always starts in [1,1] , facing to the right. 
* The locations of the grid of the gold and the wumpus are chosen randomly , with a uniform distribution, from the squares other than the start square
* Each square other than the start can be a pit , with probability 0.2

- Deadends:
* The game end when the user dies but i have given the maximum lives to the user as 25 to find the treasure
* The user climbs out of the grid


## Run Locally

Clone the project

```bash
  git clone https://github.com/Sachin0277/Puzzle-Quest.git
```

Go to the project directory (login is the name of the project directory)

```bash
  cd login
```

Install dependencies

```bash
  npm install express,hbs,mongoose,nodemon,express-session
```

Start the server

```bash
  npm run start
```


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Screenshots
![login](https://user-images.githubusercontent.com/56729344/232242490-61806ecb-807c-4aeb-a5da-3825890ac2ba.png)
![signup](https://user-images.githubusercontent.com/56729344/232242506-8adb1cc0-10f2-4d04-b442-e05a6f6fcf3a.png)
![home_page](https://user-images.githubusercontent.com/56729344/232242510-fb8ff2b4-ecf9-4d0f-879b-f81e7f79a140.png)
![game_sample](https://user-images.githubusercontent.com/56729344/232242512-ed710caf-28ab-4e1a-9c58-c4f0cf4fa1ac.png)




## Support

For support, email sachinyadav0278@gmail.com .



## Authors

- [@Sachin Yadav](https://github.com/Sachin0277)
