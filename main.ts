let x = 0
let y = 0
function isLevel () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 100) {
        return "N"
    } else if (Math.abs(y) > 100) {
        return "N"
    } else {
        return "Y"
    }
}
