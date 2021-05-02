const isBetween = (value, first, second) => {
    let x = (first > second) ? (second <= value && first >= value) : (second >= value && first <= value)

    return x;
}
const twoLineCrossed = (a, b, c, d) => {

    return (((a.x == b.x) && isBetween(a.x, c.x, d.x) && (isBetween(c.y, a.y, b.y) || isBetween(d.y, a.y, b.y))) || ((a.y == b.y) && isBetween(a.y, c.y, d.y) && (isBetween(c.x, a.x, b.x) || isBetween(d.x, a.x, b.x))))
}
const isSelfCrossing = function (distances) {


    if (distances[1] <= distances[3] && distances[0] >= distances[2]) {
        return true
    }
    let history = [{ x: 0, y: 0 }]
    let direction = 0
    let currentCoordinates = {
        x: 0,
        y: 0
    }
    for (let i = 0; i < distances.length; i++) {
        const d = distances[i];
        switch (direction) {
            case 0:
                direction++
                currentCoordinates.y += d
                break;
            case 1:
                currentCoordinates.x -= d
                direction++
                break;
            case 2:
                currentCoordinates.y -= d
                direction++
                break;
            case 3:
                currentCoordinates.x += d
                direction = 0
                break;
        }
        // 
        history.unshift({
            x: currentCoordinates.x,
            y: currentCoordinates.y
        })

        if (history.length > 6) {

            if ((twoLineCrossed(history[0], history[1], history[3], history[4]))
                || (twoLineCrossed(history[0], history[1], history[4], history[5]))
                || (twoLineCrossed(history[0], history[1], history[5], history[6]))) {


                return true
            }
        } else if (history.length > 5) {

            if ((twoLineCrossed(history[0], history[1], history[3], history[4]))
                || (twoLineCrossed(history[0], history[1], history[4], history[5]))) {


                return true
            }
        } else if (history.length == 5) {

            if (twoLineCrossed(history[0], history[1], history[3], history[4])) {

                return true
            }
        } else {

        }
    }

    return false

}

isSelfCrossing([1, 1, 2, 1, 1])

