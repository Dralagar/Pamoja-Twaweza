declare module 'react-ga' {
  export function initialize(trackingId: string): void;
  export function pageview(path: string): void;
}

