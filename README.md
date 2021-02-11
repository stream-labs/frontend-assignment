## Streamlabs Frontend Take Home Assignment

Hi there! We are happy you are interested in joining the frontend engineering team here at Streamlabs. We are on a mission of building tools to help content creators around the world grow, and we are excited to have you on board.

We work fast, fail fast, and iterate fast to keep up with the fast pace of this industry, and we are looking for a talented frontend engineer to join this process with us. You will work on range of different products visible to hundreds of thousands of daily users, solve interesting non-conventional technical challenges, and grow to become full product owner along the way.

We believe it is important that our assessment of your skills matches the technical challenges you will face as an engineer at the company. Please carve out **approximately 2-3 hours** for this assignment. For that, we want you to build a basic skeleton of the editor in our popular live streaming software - [Streamlabs OBS](https://streamlabs.com/streamlabs-obs).

## Your mission

Your mission, should you choose to accept it, is to familiarize yourself with the browser canvas API and build a canvas with 2 draggable elements.

- The canvas should be 100% width with a 16:9 aspect ratio. The canvas should be responsive to browser window resizing.

- You should render 2 images in the top left of the canvas. You may choose any images you wish, and they can be hardcoded. Allowing the user to select images is not part of this assignment. Both of these images should be rendered on the same canvas. You can choose appropriate dimensions of the images but they should maintain proper aspect ratios of the original image sources.

- You should be able to **drag each image** individually around the canvas with your mouse cursor. An image cannot be dragged into a position where it is partially outside the canvas.

- When the image is being dragged, add a green border of 2 pixels width around the dragged image.

- While you are welcome to use 3rd party libraries, please do not use any libraries that fully implement the rendering/dragging behavior (i.e. Fabric.js). We will be further customizing this behavior in the future, and we need the flexibility that the low-level canvas API provides.

- JavaScript and TypeScript are both acceptable for this assignment, and you should choose whichever one you would prefer.

- While we love automated tests at Streamlabs, you are not required or encouraged to include them as part of your solution. If it helps you to write tests, you are welcome to include them, but we will not be judging them as part of your submission.

```
💡 We have provided a template to get started and minimize time to set it up. If you prefer to start from scratch, you are welcome to do that as well. You may choose a framework of your choice and state your reasoning for that decision.

The 2-3 hours time requirement is not a hard stop, and was determined with an assumption of previous basic knowledge of core concepts utilized. It is in your best interest to finish the tasks in the mission for us to assess your ability.
```

## What we are looking for

While the hard requirements of this assignment are somewhat basic, we are looking for assignments that display deep understanding of JavaScript and an ability to write clean, scalable, and well commented code. The infrastructure should be easily able to potentially handle future feature requirements such as the following:

- persisting state on refresh
- ability to add/remove images from file input and/or src
- reordering the z positions of each layers
- instead of drawing static images, drawing custom object (like our alerts)
- resizing and cropping objects
- undo/redo

```
NOTE: You do not need to build these features
```

## Documentation & Thought Process

- Please include a `README.md` that includes instructions on how to run you application

- Please create a `SOLUTION.md` documenting your learnings as you go along. You can have it in a log format or in one big chunk after you finished.

- Please try to comment/commit your code as much as you think is needed.

- Please take some time to briefly answer the following questions at the end of your submission

```
- How long did it take you to complete this assignment?


- What about this assignment did you find most challenging?


- What about this assignment did you find unclear?


- What challenges did you face that you did not expect?


- Do you feel like this assignment has an appropriate level of difficulty?

- Briefly explain your decisions to use tools, frameworks and libraries like React, Vue, etc.
```

## Questions

Please email us if you have any questions along the way. We will try our best to help guide you through any confusions. Feel free to make assumptions and document them as you go as well.

## Submission

Please submit your completed assignment via email to the recruiter who sent it to you. You can submit your assignment as a zip file attachment, or you can push it to a GitHub repository and include a link to the respository. We want to thank you again for your time and for your interest in joing the engineering team at Streamlabs!
