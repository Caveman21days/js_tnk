// 1.
// var x = 6, y = 15, z = 4;
// y /= x + 5 % z;    ->    %, +, /=
//
// x = 6; y = 2.142857142857143; z = 4


// 2.
// var x = 6, y = 15, z = 4;
// z = x++ + y * 5;    ->   ++, *, +, =,
//
// x = 7; y = 15; z = 81


// 3.
// var x = 6, y = 15, z = 4;
// x += y - x++ * z;   ->   ++, *, -, +=,
//
// x = -3; y = 15; z = 4


// 4.
// var x = 6, y = 15, z = 4;
// z = -- x - y * 5;   ->   --, *, -, =
//
// x = 5; y = 15; z = -70


// 5.
// var a = 3;
// var b = ++a + 1 + a++;   ->   ++, ++, +, +, =
//
// a = 5; b = 9