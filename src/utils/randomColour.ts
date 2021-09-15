const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

export const getRandomColour = () => {
  const colour = colors[Math.floor(Math.random()*colors.length)];
  return colour;
}
