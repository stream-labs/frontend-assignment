const imgUrls = ['./assets/dog.png', './assets/cat.png'];

const state = {
  images: [],
  canvas: null,
  canvasContext: null,
}

async function loadImages(imageUrls) {
  const images = [];
  for (let i = 0; i < imgUrls.length; i++) {
    try {
      const element = await loadImage(imageUrls[i]);
      images.push({
        element,
        data: {
          x: 0,
          y: 0,
          width: element.width,
          height: element.height,
        },
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  return images;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.addEventListener('error', reject);
    image.src = src;
  });
};

function render() {
  state.canvasContext.clearRect(0, 0, state.canvas.width, state.canvas.height);
  drawImages();
}


function drawImages() {
  state.images.forEach(image => {
    const imageRect = new Path2D();
    imageRect.rect(0, 0, image.data.width, image.data.height);
    image.path = imageRect;
    state.canvasContext.drawImage(
      image.element,
      image.data.x,
      image.data.y,
      image.data.width,
      image.data.height
    );
  });
}

function adjustCanvasSize() {
  const { innerWidth } = window;
  state.canvas.width = innerWidth;
  state.canvas.height = Math.floor((innerWidth / 16) * 9);
}

async function setInitialState() {
  state.images = await loadImages(imgUrls);
  state.canvas = document.getElementById('canvas');
  state.canvasContext = state.canvas.getContext('2d');
}


window.addEventListener('load', async () => {
  await setInitialState();
  adjustCanvasSize();
  render();
});