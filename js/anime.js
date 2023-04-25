[...document.querySelector('.head_nav div').children].forEach((el,ei)=>{
  anime({
    targets: el,
    translateX: [-50,5],
    opacity: [0,1],
    delay: eval(ei+1) * 100,
    // easing: 'easeInOutQuad',
    duration: 1000,
  });
})


