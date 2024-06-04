def isLevel():
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if abs(x) > 100:
        return "N"
    elif abs(y) > 100:
        return "N"
    else:
        return "Y"
