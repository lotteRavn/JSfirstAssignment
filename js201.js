"Use strict"

let year;

let leapYear = true;

year = window.prompt('Enter a Year');
leapYear = (year % 4 == 0)&&(year % 400 == 0)&&(year % 100 != 0);

document.write(leapYear);

