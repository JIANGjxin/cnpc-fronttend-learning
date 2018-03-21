let a,b,c;
for (let i = 100; i < 1000; ++i) {
   a = i % 10;
   b = ((i / 10) % 10);
   b = parseInt(b);
   c = i / 100;
   c = parseInt(c);
   if (i == a * a * a + b * b * b + c * c * c)
       console.log(i + " ");
}