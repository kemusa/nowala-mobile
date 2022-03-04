interface ImagePaths {
  readonly PATHS: string[];
}

// todo: review url regex
const cachedImages: ImagePaths = {
  PATHS: [
    'https://storage.googleapis.com/nowala-public/solar_kit_hero_3.jpg',
    'https://storage.googleapis.com/nowala-public/road_image.png',
    'https://storage.googleapis.com/nowala-public/lantern.png',
    'https://storage.googleapis.com/nowala-public/village_home.png',
    'https://storage.googleapis.com/nowala-public/bulb.png',
    'https://storage.googleapis.com/nowala-public/cash.png',
  ],
};

export default cachedImages;
