
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9users.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

//NOTES

//MONGO

//Install Mongo
sudo apt-get install -y mongodb-org
mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@' > mongod
$ chmod a+x mongod

start mongo db -- $ ./mongod -- open new terminal
open mongo console -- $ mongo

Shutdown Mongod Server -- ctrl + c 

If you leave it running then Cloud 9 could timeout and cause mongo to crash. If this happens, try the following steps to repair it. 
From the command line, run:
cd ~
./mongod --repair
If you're still having trouble getting it to run then find the /data directory (it should be inside of ~ or ~/workspace) and cd into it.
Once inside, run rm mongod.lock then cd back into ~ and run ./mongod again (see below).

cd ~/data
rm mongod.lock
cd
./mongod
