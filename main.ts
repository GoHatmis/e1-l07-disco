basic.forever(function () {
let icoon = randint(1, 5);
let zichtbaar = randint(2,7) * 100;
let clear = randint(0,200);

if (icoon === 1)
{
    basic.showIcon(IconNames.Heart);
}
else if (icoon === 2)
{
 basic.showIcon(IconNames.Diamond)
}
else if (icoon === 3)
{
  basic.showIcon(IconNames.Square); 
} 
else if (icoon === 4)
{
    basic.showIcon(IconNames.Triangle);
}
else
{
    basic.showIcon(IconNames.SmallSquare);
}

basic.pause(zichtbaar);
basic.clearScreen();
basic.pause(clear);
})
