export enum UsageTarget {
  JavaScript = 'javascript',
  React = 'react',
  Vue = 'vue',
}

export enum Mode {
  iOS = 'ios',
  MD = 'md',
}

export interface ConsoleItem {
  type: 'log' | 'warning' | 'error';
  message: string;
}
