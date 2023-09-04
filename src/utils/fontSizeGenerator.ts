const fontSizeGenerator = (): string => {
  return (Math.random() * (1.5 - 0.7) + 0.7).toFixed(1);
};

export default fontSizeGenerator;
