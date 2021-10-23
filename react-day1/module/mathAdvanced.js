let PI = 3.1415926;

let area = r => {
  return r * r * PI;
}

let areaRect = (width, height) => {
  return width * height;
}

export {
  PI,
  area,
  areaRect,
}