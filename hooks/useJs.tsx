import { useState } from 'react';

interface UseJsReturn {
  js: string;
  setJsValue: (value: string) => void;
}
//For useJs: a JavaScript function handleClick that alerts "button clicked"
const useJs = (): UseJsReturn => {
  const [js, setJs] = useState<string>(`
    const handleClick = () => {
      alert("button clicked");
    }
  `);

  const setJsValue = (value: string): void => {
    setJs(value);
  }

  return { js, setJsValue };
}

export default useJs;
