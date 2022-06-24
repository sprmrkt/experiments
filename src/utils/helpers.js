export const placeObjectOnSphere = (lat, lon, radius) => {
  let latRad = lat * (Math.PI / 180);
  let lonRad = -lon * (Math.PI / 180);
  return [
    Math.cos(latRad) * Math.cos(lonRad) * radius,
    Math.sin(latRad) * radius,
    Math.cos(latRad) * Math.sin(lonRad) * radius
  ]
}
