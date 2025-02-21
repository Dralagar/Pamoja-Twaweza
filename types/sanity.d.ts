declare module 'sanity' {
  export function defineConfig(config: any): any;
  // Add other exports from the sanity module as needed
}

declare module 'sanity/desk' {
  // Add any specific types you need here
  export const deskTool: any;
} 