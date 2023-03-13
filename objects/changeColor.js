//Дан массив объектов, представляющих различные геометрические фигуры,
// такие как прямоугольники, круги и треугольники.
// Каждый объект имеет свойство type, которое указывает на тип фигуры,
// свойство color, характеризующее цвет фигуры.
// Напишите функцию, которая изменяет цвет всех прямоугольников в массиве
// на синий (blue) и возвращает новый массив с измененными свойствами.

const arr = [
  { type: 'circle', color: 'blue' },
  { type: 'rectangle', color: 'green' },
  { type: 'triangle', color: 'yellow' },
  { type: 'rectangle', color: 'white' },
  { type: 'circle', color: 'red' },
  { type: 'rectangle', color: 'green' },
]
function figures(arr){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === 'rectangle') {
      arr[i].color = 'blue';
    }
    }
    return arr;
}

console.log(figures(arr))
