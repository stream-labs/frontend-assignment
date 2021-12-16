## Streamlabs Frontend Take Home Assignment

Hi there! We are happy you are interested in joining the frontend engineering team here at Streamlabs. We are on a mission of building tools to help content creators around the world grow, and we are excited to have you on board.

We work fast, fail fast, and iterate fast to keep up with the fast pace of this industry, and we are looking for a talented front-end engineer to join this process with us. You will work on a range of different products visible to hundreds of thousands of daily users, solve interesting non-conventional technical challenges, and grow to become a full product owner along the way.

We believe it is important that our assessment of your skills matches the technical challenges you will face as an engineer at the company. Please carve out approximately 3-4 hours for this assignment. For that, we want you to build a basic skeleton of our new web-based live-streaming studio - [Melon](https://melonapp.com).

## Your mission

Your mission, should you choose to accept it, is to familiarize yourself with the browser media stream API and build a basic interface of a web-based live-streaming studio following [this Figma wireframe](https://www.figma.com/file/U7xUVvkKNfOqQbjsNYHZsy/Streamlabs-Take-Home-Assignment-Mockups?node-id=2%3A811).

- The stream should be a 16 x 9 aspect ratio and be responsive to the window size. Both layouts are available on Figma. The stream should be fully visible at all screen sizes.
- Users can add up to 2 images to the studio. One image will represent **a video webcam feed** while another image will represent **a screenshare feed**
- Users can add/remove both images to the stream. The layout should auto-adjust to render the new number of images on stream. More information on this is below.
- The positions of the images on the stream will vary depending on the number of images added. For a specific number of images, users can toggle different layouts as well.
- The "Go Live", "Record" and "Chat" buttons are just placeholders. Your application **should not** include any functionality for streaming, recording, or chatting.
- JavaScript and TypeScript are both acceptable for this assignment, and you should choose whichever one you would prefer.
- You are free to use Vue, React, Angular or any other frameworks you'd like. You are also free to use any npm libraries that may be useful to you.
- While we love automated tests at Streamlabs, you are not required or encouraged to include them as part of your solution. If it helps you to write tests, you are welcome to include them, but we will not be judging them as part of your submission.

### Add/remove images to/from the stream

Users can add and remove images to the stream. When an image is added, it is rendered on stream with the coordinates, and dimensions determined by the stream layout. The percentages below are relative to the stream player size in Figma.

When only the "webcam" image is added, there are 3 layouts - 100%, 80%, and 60% width & height.

When only the "screen share" image is added, there is 1 layout, 100% width & height.

When both the webcam and screen share images are added, there are 3 layouts:
1. Screen share is 100% width & height and the webcam source is floating bottom right
2. Screen share is 100% width & height and the webcam source is floating bottom left
3. Screen share is 66% width and 80% height. The webcam source is 33% width and 80% height

For each combination of added images, only the valid layout options are presented. For example, when the user has webcam source selected, they will see 3 layout options. When the user removed this webcam source and then selects a screen share source, they will see just one layout option.


## Note on the time duration

The 3-4 hours time requirement is not a hard stop and was determined with an assumption of previous basic knowledge of core concepts utilized. It is in your best interest to finish the tasks in the mission for us to assess your ability.

## What we are looking for

This assignment is a good reflection of your day-to-day at Streamlabs. We are looking for assignments that demonstrate a deep understanding of JavaScript and an ability to write clean, scalable, and well-commented code. The infrastructure should be easily able to potentially handle future feature requirements such as the following:

- Replacing static images with videos
- Keyboard shortcut bindings
- Different media source types such as pre-recorded video or audio
- Adding other elements on the stream beside the media sources, such as logo, banner text, and ticker
- Customizing stream background with images or solid colors

**NOTE:** You do not need to build these features today. Just keep in mind that you are building a strong foundation for this app to evolve into a complex feature-complete product in the future.

From a product standpoint, we are looking for candidates who value building a beautiful product as much as a functional one. This means clean CSS following the best modern standards and attention to detail to the interface and user experience.

We have intentionally created some room for creativity around the UI. Once you have completed the core assignment requirements, you can use the remaining time to add some personal touches. Please do not spend more than 1 hour on this.


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

- Did you make certain assumptions and decisions around the UI/UX? Please elaborate on your reasonings.
```

## Questions

Please email us if you have any questions along the way. We will try our best to help guide you through any confusions. Feel free to make assumptions and document them as you go as well.

## Submission

Please submit your completed assignment via email to the recruiter who sent it to you. You can submit your assignment as a zip file attachment, or you can push it to a GitHub repository and include a link to the respository. We want to thank you again for your time and for your interest in joing the engineering team at Streamlabs!
