// It you them us
export const spaces = [
    {bottom:218.875,height: 102,left: 289.5,right: 389.5,top: 116.875,width: 100,x: 289.5,y: 116.875},
    {bottom: 217.875,height:100,left:679,right: 781,top: 117.875,width: 102,x: 679,y: 117.875},
    {bottom:317.875,height:100,left: 288.5,right: 390.5,top: 217.875,width: 102,x: 288.5,y: 217.875},
    {bottom:318.875,height: 102,left: 389.5,right: 489.5,top: 216.875,width: 100,x: 389.5,y: 216.875}
];

  // Add the spinner animation for N seconds
export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
 // Tell where the blue dot has collided with the board
 // @bluestate = bluedot 3us = us 2them = them @it[0] = it @you1 = you
export function isCircleCollidingWithSquare(circleX, circleY, circleRadius, 
    squareX, squareY, squareWidth, squareHeight) {
    // Find the closest point on the square to the circle's center
    let closestX = Math.max(squareX, Math.min(circleX, squareX + squareWidth));
    let closestY = Math.max(squareY, Math.min(circleY, squareY + squareHeight));
  
    // Calculate the distance between the circle's center and the closest point on the square
    let distanceX = circleX - closestX;
    let distanceY = circleY - closestY;
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
    // Check if the distance is less than the circle's radius
    return distance <= circleRadius;
  }
  
