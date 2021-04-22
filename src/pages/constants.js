import { sqrt, sin, cos, atan2 } from 'mathjs';

function calcETA(speed, lat2, lat1, lon2, lon1) {
  var earthRadius = 6373
  var dlat = lat2 - lat1
  var dlon = lon2 - lon1

  //Haversine formula, split in two for readability
  var part1 = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2

  var part2 = 2 * atan2(sqrt(part1), sqrt(1 - part1))

  var distance = earthRadius * part2
  var toKnots = distance / 1.852
  var ETA = (toKnots / speed)
  return ETA
};

export default calcETA;