// Factory function
// Cron: functions doesn't have to be unique and can be shared through prototype

/* function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  color.hex = function() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return color;
}

const red = makeColor(255, 0, 0);
const green = makeColor(0, 255, 0);
*/


// Constructor function
/*
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function() {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function() {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function(a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const red = new Color(255, 0, 0); // new is important, without new. Color(255,0.0) will be normal function and return undefined
const green = new Color(0, 255, 0);
// document.body.style.background = red.rgba(0.8);
*/


// Class
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g,
    this.b = b;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 0, 0);
const green = new Color(0, 255, 0);