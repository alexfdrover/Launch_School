function myBind(func, context, ...defaults) {
  return function(...args) {
    const fullArgs = defaults.concat(args);
    return func.apply(context, fullArgs);
  };
}

