import { useState } from 'react';

interface UseHtmlReturn {
  html: string;
  setHtmlValue: (value: string) => void;
}
//  For useHtml: a simple button element with an onClick event handler
const useHtml = (): UseHtmlReturn => {
  const [html, setHtml] = useState<string>(`
    <button onClick="handleClick()">
      Start Here
    </button>
  `);

  const setHtmlValue = (value: string): void => {
    setHtml(value);
  }

  return { html, setHtmlValue };
}

export default useHtml;
