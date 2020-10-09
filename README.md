Simple Example for Interfacing NEST Server API with JavaScript
==============================================================

Start the local Web Server
--------------------------

Open a terminal and type:

    python ./src/start-web-server.py

Start the NEST API Server local
-------------------------------

You can easily use our latest docker image:

    # starting nest-server in background (only 'latest')
    docker run -d --rm -e LOCAL_USER_ID=`id -u $USER` -p 5000:5000 nestsim/nest:latest nest-server

If you have the latest NEST installed, open another terminal and type:

    bash ./src/start.sh <nest-install-directory>

Start Firefox (e.g.) with Examples
----------------------------------

    firefox http://localhost:8000/src/test.html
