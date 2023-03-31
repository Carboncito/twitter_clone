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
    font-weight: 600;
  `,
  h2: `
    font-size: 29px;
    line-height: 32px;
    font-weight: 600;
  `,
  h3: `
    font-size: 26px;
    line-height: 32px;
    font-weight: 600;
  `,
  h4: `
    font-size: 23px;
    line-height: 24px;
    font-weight: 600;
  `,
  h5: `
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  `,
  h6: `
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
  `,
};
