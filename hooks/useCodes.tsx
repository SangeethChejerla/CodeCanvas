"use client"
import { useState } from 'react';

interface UseCodesReturn {
  codes: string;
  setCodesValue: (value: string) => void;
}

const useCodes = (): UseCodesReturn => {
  const [codes, setCodes] = useState<string>("");

  const setCodesValue = (value: string): void => {
    setCodes(value);
  }

  return { codes, setCodesValue }; // Return an object instead of an array
}

export default useCodes;
