Visit the live site here: https://snake-game-amber-pi.vercel.app/

# Project

This app allows you to personalize a t-shirt rendered in 3D using the Three Fiber React library. You can change the color of the t-shirt, add a logo or a texture or even generate a logo or a texture with AI and apply it to the t-shirt.

## How does it work ?

The app uses Typescript, Redux and Redux-Saga (to manage asynchronous operations in Redux).

A store is provided to the app. The store consists in actions, reducers and sagas.

The App shows a canvas, where the snake and apples are drawn.

The user can control the snake using the four arrow keys of the keyboard. The snake can turn left, turn right, or continue straight, but can not turn around on himself. So at each keystroke, a `disallowedDirection` is registered in the state.

After the game is started, a loop begins and repeats the user last action every 100ms, while listening to other actions. If the snake colides with himself or the borders of the canvas, the game is over and can be restarted from scratch.

## Getting started

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

