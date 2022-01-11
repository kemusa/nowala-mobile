import { Asset } from 'expo-asset';
import { Image } from 'react-native';
import cachedImages from './consts/CACHED_IMAGES';

const _cacheResourcesAsync = async () => {
  const images: any[] = cachedImages.PATHS;
  const cacheImages = images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
  return Promise.all(cacheImages);
};

export { _cacheResourcesAsync };
