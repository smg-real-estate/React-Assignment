import { type Metric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    void import('web-vitals').then((webVitals) => {
      webVitals.onCLS(onPerfEntry);
      webVitals.onLCP(onPerfEntry);
      webVitals.onFCP(onPerfEntry);
      webVitals.onTTFB(onPerfEntry);
      webVitals.onINP(onPerfEntry);
    });
  }
};

export default reportWebVitals;
