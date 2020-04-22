# Solorzano's Maze
## A Sliding Puzzle

### The Game

_Solorzano's Maze_ is a sliding puzzle game written in pure JavaScript, based on [React](https://reactjs.org/) and [Redux](https://github.com/reduxjs/redux). It displays an interactive 4x4 puzzle grid, where 15 of the 16 grid cells are filled (randomly, at the beginning) with fragments taken from a digital facsimile of an early modern book (see below), published by the [School of Salamanca research project](http:www.salamanca.school). The player's task is to reorganize the fragments through shifting them repeatedly until the grid, ultimately, displays the "maze" to be found in the original facsimile.

### The Facsimile

The [original facsimile](https://facs.salamanca.school/W0096/B/W0096-B-0051.jpg) represents a page in the front matter of the [second volume](https://id.salamanca.school/texts/W0096:vol2?format=html?mode=meta) of Juan de Solórzano Pereiras work "De Indiarum Iure" from 1629. While the volume contains quite a number of epigrams (that is, sections of prose texts or poems praising the author) in its front matter, one such epigram appears especially fanciful even by early modern standards: it arranges the capital letters S-O-L-O-R-S-A-N-O ("Solorsano" is the latinized version of the author's surname) within a rectangularly shaped grid in a way that the letters appear randomly, at first, with some of them concatenated with lower-cased letters to words (in fact, the rows of the grid can be read from left to right just like lines of text). However, a special property of the grid is that the capital letters actually form a _maze_ ("Labyrintho") that, starting from the large "S" in the center of the grid, can be followed in any vertical or horizontal direction, with the capital letters always stringing together as "SOLORSANO". It is exactly this labyrinthian arrangement that the player needs to reconstruct.


### Install and Run Locally

Clone the repository:

`git clone https://github.com/dvglc/solorzanos-maze.git`

With npm, the dependencies can be installed via

`npm install` 

(Note that this downloads quite a bunch of packages, which is not uncommon for npm due to transitive dependencies etc...)

Then run it:

`npm start`

This will start a development server (by default, on port 3000) and may try to open the app in a browser window/tab.