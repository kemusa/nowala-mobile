import * as Segment from 'expo-analytics-segment';
import environment from '../environments';
const { segmentWriteKey } = environment();
// todo: dynamically swap via env vars
const writeKey = segmentWriteKey;
const analyticsInit = async () => {
  Segment.initialize({ iosWriteKey: writeKey, androidWriteKey: writeKey });
};

export { analyticsInit };

export default class AnalyticsService {
  public identify(userId: string) {
    Segment.identify(userId);
  }

  public track(event: string) {
    Segment.track(event);
  }

  public screen(screenName: string) {
    Segment.screen(screenName);
  }

  public screenWithProperties(screenName: string, properties: object) {
    Segment.screenWithProperties(screenName, properties);
  }
}
