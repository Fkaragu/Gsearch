# GSearch

#### GSearch is a web-application that simply uses the API concept to connect to the github and searches for users and there repos.

 20/January/2019

# Francis Thande Karagu
#### The GSearch Program, Friday 20th January 2019
#### By **{Francis T Karagu}**


## Description

Gsearch is a web-application that is designed in Angular js and TypeScript to search for users on Github (https://github.com). The application user has the ability to type a name and press enter for the system to search. A user has also the functionality to view the repositories for the user searched.

GSearch is built entirely in Angular.js and TypeScript.

## Application link
Here is a live working link https://fkaragu.github.io/Gsearch/

## Prerequisites

1.  Install Git.
2.  Install Node.
3.  Install Angular.
4.  Install Watchman.
5.  Install Typescript.

##Setup

1.  Use this command $ git clone <https://github.com/Fkaragu/Gsearch> This will clone the project repository into a local folder on your device.
2.  Open the files with an editor( preferably Atom. )
3.  Study the code. learn from it. Improve on it.

## Behavior Driven Development BDD
### Who is the target User?
* Anyone who wants to search anyone's repositories.

### Front-end/User Interface Logic Objectives
* By default the page will load and the username has to be captured.
* Once the username is captured press enter for search to happen.
* Public Repos are the number of repos the user has.
* Public Gist are the number of gists the user has.
* Follower are the number of people following the user.
* Following are the number of people the user is following.
* View repos is a link to access the users repositories.

### Back-end/Business logic Objectives
* Username captured is passed via a class to the github site.
* Once the details are found they are retrieved and allocated to various position.
* If a different user is searched the previous details are replaced.


## Behaviour
| Behaviour                              | Input Example     | Output Example    |
|----               | :---:             |---: |
| The program should handle:    | When it receives:     | It should return  |                             
|:----:               | :---:             |:---: |
| Accept text input             | Press Enter          | Search for the input details on github and return details pertaining that input              |

## Known Bugs

   NO bugs present.

## Technologies Used

1.  Angular
2.  TypeScript
3.  nodejs
4.  watchman
5.  Atom text editor


## Support and contact details
In case of any problems reach me through my email:fkaragu@gmail.com

### License
Copyright (c) {2019} **{Francis Thande Karagu}**
Permission is hereby granted, free of charge, to any person willing to obtain a copy of this program for personal use. However if the program will be used for commercial gain then a royalty fee will have to be paid to the author of the program.
