// function revealspan() {
//     document.querySelectorAll(".reveal").forEach(function (elem) {
//       // creats sapn parent and chid 
//       let spanParent = document.createElement("span");
//       let spanChild = document.createElement("span");
  
//       // adding classes to span
//       spanParent.classList.add("parent");
//       spanChild.classList.add("child");
  
//       // gives spanchild content of elem
//       spanChild.innerHTML = elem.innerHTML;
  
//       // adds spanchild to spanparent
//       spanParent.appendChild(spanChild);
  
//       // removes elems old content 
//       elem.innerHTML = "";
  
//       // adds spanparent to elem 
//       elem.appendChild(spanParent);
//     });
//   }
  
  
//   revealspan();
   
//   let tl = gsap.timeline();
  
//   tl
//   .from(".child span" , {
//     x : "200",
//     duration : 1.5,
//     delay : 1,
//     stagger: .2,
//     ease: Circ.easeInOut,
  
//   })
//   .to(".parent .child" , {
//     y : "-100%",
//     duration : 1,
//     ease: Circ.easeInOut,
  
  
//   })
//   .to(".loader" , {
//     height : 0,
//     duration : 1,
//     // delay : 1,
//     ease: Circ.easeInOut,
//   })
//   .to(".green" , {
//     height : "100%",
//     top : 0,
//     duration : .8,
//     delay : -.8,
//     ease: Circ.easeInOut,
//   })
//   .to(".green" , {
//     height : "0",
//     top : 0,
//     duration : .5,
//     delay : -.2,
//     ease: Circ.easeIn,
//   })

// function loco(){
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
// }

// loco();

function cardShow(){
  document.querySelectorAll(".cnt")
  .forEach(function(cnt){
    var showingImg;
    cnt.addEventListener("mousemove",function (dets) {
      document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity= 1;
      showingImg = dets.target;
      document.querySelector(".cursor").children[dets.target.dataset.index].style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
      showingImg.style.filter = "greyscale(1)";
    })
    cnt.addEventListener("mouseleave", function (dets) {
      document.querySelector(".cursor").children[showingImg.dataset.index].style.opacity= 0 ;
    })
  })
}

cardShow();