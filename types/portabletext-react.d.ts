declare module '@portabletext/react' {
  import { ComponentType } from 'react';

  interface PortableTextProps {
    value: any;
    components?: Record<string, ComponentType<any>>;
  }

  const PortableText: ComponentType<PortableTextProps>;

  export { PortableText };
}

