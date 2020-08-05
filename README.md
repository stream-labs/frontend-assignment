## Streamlabs Frontend Take Home Assignment

Hi there! We are happy you are interested in joining the team here at Streamlabs. We as a company are on a mission of helping content creators around the world grow with our tools, and we are excited to have you on board.

We work fast, fail fast, and iterate fast to keep up with the fast pace of this industry, and we are looking for a talented frontend developer to join this process with us. You will work on range of different products visible to hundreds of thousands of daily users, solve interesting non-conventional technical challenges, and grow to become full product owner along the way.

We believe it is important to design the test to match the technical challenges you will face in the company. Please carve out **maximum 4 hours** for this assignment. For that, we want you to build a basic skeleton of the editor in our popular live streaming software - [Streamlabs OBS](https://streamlabs.com/streamlabs-obs).

## Your mission

Your mission, should you choose to accept it, is to familiarize yourself with the browser canvas API and create an HTML page with a single canvas element.

- The canvas should be 100% width with a 16:9 aspect ratio. The canvas should be responsive to browser window resizing.

- The canvas should initially be drawn with 2 images, both at top-left position of the canvas. Both of these images should be rendered on the same canvas. You can choose appropriate dimensions of the images but they should maintain proper aspect ratios of the original image sources.

- You should be able to **drag each image** around the canvas with your mouse cursor. An image cannot be dragged into a position where it is partially outside the canvas.

- When image is being dragged state, add a green border of 2 pixels width around the dragged image.

- While you are welcome to use 3rd party libraries, please do not use any libraries that fully implement the rendering/dragging behavior (i.e. Fabric.js). We will be further customizing this behavior in the future, and need the flexibility that the low-level canvas API provides.

## What we are looking for

While the hard requirements of this assignment is somewhat basic, we are looking for assignments that display deep understanding of JavaScript and an ability to write clean, scalable, and well commented code. The infrastructure should be easily able to handle future feature requirements such as:

- persisting state on refresh
- ability to add/remove images from file input and/or src
- reordering the z positions of each layers
- instead of drawing static images, drawing custom object (like our alerts)
- resizing and cropping objects
- undo/redo

## Documentation & Thought Process

- Please create SOLUTION.md documenting your learnings as you go along. You can have in a log format or in one big chunk after you finished.

- Please try to comment/commit your code as much as you think is needed.

- Please take the time to briefly answer the following questions at the end of your submission

```
- How long did it take you to complete this assignment?


- What about this assignment did you find most challenging?


- What about this assignment did you find unclear?


- What challenges did you face that you did not expect?


- Do you feel like this assignment has an appropriate level of difficulty?
```

## Questions

Please email us if you have any questions along the way. We will try our best to help guide you through any confusions. Feel free to make assumptions and document them as you go as well.
