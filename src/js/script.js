(function (){
  const headersDecoration = [...document.querySelectorAll('.header-decoration')];
  let i = 0;
  return new Promise((res, req) => {
    headersDecoration[i].classList.add('active');
    i++;
    res()
  })
  .then(res => {
    return new Promise((res, req) => {
      setTimeout(() => {
        headersDecoration[i].classList.add('active');
        i++;
        res()
      }, 500)
    })
  })
  .then(res => {
    setTimeout(() => {
      headersDecoration[i].classList.add('active');
      i++;
      return res
    }, 500)
  })
})()