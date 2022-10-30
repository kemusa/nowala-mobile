import * as Segment from 'expo-analytics-segment';
import { createClient } from '@segment/analytics-react-native';

import environment from '../environments';
const { segmentWriteKey } = environment();
// todo: dynamically swap via env vars
const writeKey = segmentWriteKey;
const analyticsInit = async () => {
  Segment.initialize({ iosWriteKey: writeKey, androidWriteKey: writeKey });
};

const segmentClient = createClient({
  writeKey
});

export { analyticsInit };

export default class AnalyticsService {
  public identify(userId: string) {
    segmentClient.identify(userId);
  }

  public track(event: string, properties?: object) {
    properties ? segmentClient.track(event, properties as any): segmentClient.track(event);
  }

  // public trackWithProperties(event: string, properties: object) {
  //   Segment.trackWithProperties(event, properties);
  // }

  public screen(screenName: string, properties?: object) {
    properties ? segmentClient.screen(screenName, properties as any): segmentClient.screen(screenName);
  }

  // public screenWithProperties(screenName: string, properties: object) {
  //   Segment.screenWithProperties(screenName, properties);
  // }
}
