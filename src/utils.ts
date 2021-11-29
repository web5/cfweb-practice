export function debounce(fn: Function, delay: number) {
  let timer: any;
  return function(...args: any) {
    console.log('debounce args>>>>', args);
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(args);

    }, delay)
  }
}

export function throttle(fn: Function, delay: number){
  let last = 0;
  return (...args: any) => {
    console.log('throttle args>>>>', args);
    const now = Date.now();
    if(now - last > delay) {
      last = now;
      fn(args);
    }
  }
}
