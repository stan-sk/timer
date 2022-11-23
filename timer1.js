const myArgs = process.argv.slice(2);


arr1 = myArgs.filter(a => !isNaN(a) && a >= 0);
cleanArr = arr1.sort((a,b) => a - b);


function timer () {
  if (myArgs.length === 0) {
    return
  } 

  for (let time of cleanArr) {
    let second = time*1000;
    setTimeout(() => {
    process.stdout.write('\x07');
    }, second);
  }
}

timer()
