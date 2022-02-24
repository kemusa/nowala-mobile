import * as Segment from 'expo-analytics-segment';
// todo: dynamically swap via env vars
const writeKey = 'jNdxmY8AFCs2d7IBYCMD8ms6CoXYxEx9';
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
