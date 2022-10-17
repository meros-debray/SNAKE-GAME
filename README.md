## RUN THE PROJECT

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## HOW DOES IT WORKS ?

The app uses Typescript, Redux and Redux-Saga (to manage asynchronous operations in Redux).

A store is provided to the app. The store consists in actions, reducers and sagas.

The App shows a canvas, where the snake and apples are drawn.

The user can control the snake using the four arrow keys of the keyboard. The snake can turn left, turn right, or continue straight, but can not turn around on himself. So at each keystroke, a `disallowedDirection` is registered in the state.

After the game is started, a loop begins and repeats the user last action every 100ms, while listening to other actions. If the snake colides with himself or the borders of the canvas, the game is over and can be restarted from scratch.

