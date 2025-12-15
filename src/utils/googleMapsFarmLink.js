export function mapsLinks({ lat, lng }) {
  return {
    open: `https://www.google.com/maps?q=${lat},${lng}`,
    directions: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
  };
}
