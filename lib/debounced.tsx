export const debounced = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
  
    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
