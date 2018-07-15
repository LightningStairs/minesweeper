Requirements
=============
You will need `node` installed in order to play this terminal game.


To Set Up
==========
1. Run `npm install`
2. Run `npm run build`
3. Navigate into the newly created `lib` directory

To Play
========
1. In the command line, navigate to the lib directory and run `node`
2. Run `.load game.js` to load the contents of this file
3. Then create a Game instance and run commands like so: `let game = new Game(3, 3, 3);`
    * The first property of game is the number of rows
    * The second property of game is the number of columns
    * The third property of game is the number of bombs
4. Play moves like so: `game.playMove(0, 1);`
5. When done run `.exit`
