//Spacing between circles is 100 px and radius is 10px

for(x = 0; x < 1000; x += 100){
    for(y = 0; y < 1000; y += 100){
        new Path.Circle(new Point(x, y), 10).fillColor = 'yellow';
    }
}
