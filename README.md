# Trial Project

The frontend was bootstrapped with [Vite](https://vitejs.dev/guide/) 

The backend was bootstrapped with nodeJS and Express

## Instruction

To see the demo the project, you should run the following commmands:

```bash
    cd trial-project

    cd client 
    npm install

    cd ../server
    npm install
    
    npm run demo
```

To verify the articles are fetched properly, please open up the console in the browser once you have started the backend server. \

Alternatively, you can use tools like Postman to make a request the following route to get the data about the fetched articles: \


**Cantonese Articles: http://localhost:8000/api/v1/articles/zh** 

**English Articles: http://localhost:8000/api/v1/articles**

## Available Scripts

In the server directory, you can run:

### `npm start`

Start the backend server using nodemon.\

The server will reload if you make edits.\

### `npm run demo`

Launches both the frontend and backend in the interactive watch mode.\

Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

In the client directory, you can run:

### `npm run dev`

Launches both the frontend in the interactive watch mode.\

Open [http://localhost:3000](http://localhost:3000) to view the frontend in the browser. But without starting the server, the frontend will not display the articles

### `npm run build`

Builds the app for production to the `build` folder.\

