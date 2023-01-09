//I have following strArr array
// ["1:10pm", "4:40am", "5:00pm"]
//
// Now I'm trying to find the shortest time difference between in minutes
// of the above time list. here in above array, it should out put me 230.
//
// All the times are in twelve-hour format. (HH:MM (am/pm))

function TimeDifference(strArr) {
  let minDiff = 24 * 60
  let time = strArr.map(el => {
    let [h, m] = el.split(':')
    console.log('h, m', h, m)
    let [hour, min] = [parseInt(h), parseInt(m.slice(0, 2))]
    console.log('hour, min', hour, min)
    let ampm = m.slice(2, 4)
    console.log('ampm', ampm)
    if (ampm === 'pm') {
      hour += 12
    }
    const res = hour * 60 + min
    return res
  })

  console.log('time', time)
  time.sort((a, b) => a - b)
  for (let i = 0; i < time.length - 1; i++) {
    minDiff = Math.min(minDiff, time[i + 1] - time[i])
  }
  console.log('minDiff', minDiff)
  console.log('time', time)
  minDiff = Math.min(minDiff, time[0] + 24 * 60 - time[time.length - 1])
  return minDiff
}


function timeDiffMin(arr) {
  let minDiff = 24 * 60;
  const time = arr.map(el => {
    let [h, m] = el.split(':');
    let [hours, min] = [parseInt(h), parseInt(m.slice(0, 2))];
    let aMOrPm = m.slice(2, 4)
    if (aMOrPm === 'pm') {
      hours += 12;
    }
    return hours * 60 + min;
  })
  console.log('time', time)
  time.sort((a, b) => a - b)
  for (let i = 0; i < time.length - 1; i++) {
    minDiff = Math.min(minDiff, time[i + 1] - time[i])
  }
  return minDiff
}

console.log(timeDiffMin(["1:10pm", "4:40am", "5:00pm"]))
