"use client"
import { useState } from 'react';
// or useCss: a basic button styling
interface UseCssReturn {
  css: string;
  setCssValue: (value: string) => void;
}

const useCss = (): UseCssReturn => {
  const [css, setCss] = useState<string>(`
    button {
      height: 45px;
      border: none;
      padding: 0 30px;
      border-radius: 8px;
      margin: 10px;
      color: #fff;
      background: #5234e1;
    }
  `);

  const setCssValue = (value: string): void => {
    setCss(value);
  }

  return { css, setCssValue };
}

export default useCss;
