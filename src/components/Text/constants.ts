import { SizeText } from './types';

export const SIZE_STYLE: Record<keyof SizeText, string> = {
  small: `
    font-size: 13px;
    line-height: 20px;
  `,
  default: `
    font-size: 16px;
    line-height: 24px;
  `,
  large: `
    font-size: 20px;
    line-height: 28px;
  `,
  h1: `
    font-size: 32px;
    line-height: 36px;
  `,
  h2: `
    font-size: 29px;
    line-height: 32px;
  `,
  h3: `
    font-size: 26px;
    line-height: 32px;
  `,
  h4: `
    font-size: 23px;
    line-height: 24px;
  `,
  h5: `
    font-size: 20px;
    line-height: 24px;
  `,
  h6: `
    font-size: 18px;
    line-height: 20px;
  `,
};
