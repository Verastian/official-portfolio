// parallax
export const parallax = () => {
  let parallax = document.querySelector(".parallax");
  let Parallax = require("parallax-js");
  new Parallax(parallax, {
    relativeInput: true,
    selector: ".layer",
  });
};
// Moveing effect
export const movingEffect = () => {
  var detail = document.querySelectorAll(".moving_effect");
  var offset = 0;
  detail.forEach((element) => {
    var direction = element.getAttribute("data-direction");
    window.addEventListener("scroll", function () {
      offset = window.scrollY;
      var h = window.innerHeight;
      var i = element.getBoundingClientRect().top + window.scrollY - offset - h;
      if (element.getAttribute("data-reverse") == "yes") {
        i *= -1;
      }
      var x = direction === "x" ? (i * 70) / h : 0;
      var y = direction === "x" ? 0 : (i * 70) / h;
      if (element.getAttribute("data-reverse") == "yes") {
        i *= -1;
      }
      if (i * -1 < h + 300 && i < 300) {
        element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
      }
    });
  });
};

/* 
export const parallaxy = () => {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(`.parallax`);

  // // let elementStyle = window.getComputedStyle(elem);
  // let index1 = elementStyle.getPropertyValue("left");
  // let index2 = elementStyle.getPropertyValue("top");
  // console.log(index1.slice(0,index1.indexOf('p')))
  // console.log(index2.slice(0,index2.indexOf('p')))
  // // let index1 = elementStyle.getPropertyValue("transform");
  // let pos1 =index1.slice(0,index1.indexOf('p'))
  // let pos2 =index2.slice(0,index2.indexOf('p'))
  // console.log(index1.slice(19,22))
  // console.log(index1.slice(24,27))

  // Magic happens here
  function parallax(e) {
    // let _w = window.innerWidth/2;
    //      let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    // console.log(_w)
    // console.log(_h)
    let _depth1 = `${-_mouseX * 0.03}px`;
    let _depth2 = `${- _mouseY * 0.03}px`;
    //  let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    //      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth1}`;
    let y = `${_depth2}`;
    let z =`0px`
    // console.log(x);
    // console.log(y);
    // elem.style.left = x;
    // elem.style.top = y;
    elem.style.transform =`translate3d(${x},${y},${z})`;
  }
}; */
