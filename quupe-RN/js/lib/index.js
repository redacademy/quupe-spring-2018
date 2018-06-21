import geolib from 'geolib';

export const distanceFormatter = (itemLat, itemLong, userLat, userLong) => {
    const distanceInKM = geolib.getDistanceSimple(
        { latitude: itemLat, longitude: itemLong },
        { latitude: userLat, longitude: userLong }
    );
    return (distanceInKM / 1000).toFixed(1);
};
// export const sortByDistance = ();
