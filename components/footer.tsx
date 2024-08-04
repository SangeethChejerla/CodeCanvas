import React from 'react';
import { Button } from './ui/button';
import { GitFork, Star } from "lucide-react";
interface FooterProps {
  onClear?: () => void;
  children?: React.ReactNode;
}

export default function Footer({ onClear = () => {}, children }: FooterProps) {
  return (
    <footer className="py-2 px-3 sm:px-6 flex items-center justify-between gap-2">

      <div className="flex items-center">
        <Button size="sm" onClick={onClear} style={{ marginRight: '10px' }}>
          Clear
        </Button>
        {children}
      </div>
    </footer>
  );
}
