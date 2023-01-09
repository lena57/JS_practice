//what would be the output of the following code?

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     alert(i);
//   }, 1000 + i);
// }


for (var i = 0; i < 3; i++) {
  setTimeout(function (i_l) {
    return function () {
      alert(i_l);
    }
  }(i), 1000 + i);
}

