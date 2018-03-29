import Typed from 'typed.js';
import swal from 'sweetalert';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code", 'WEBPACK AGAIN!!!!'],
    typeSpeed: 50,
    loop: true
  });
}

const bindSweetAlertButtonDemo = () => {
  document.getElementById('sweet-alert-demo').addEventListener('click', () => {
    swal({
      title: "A nice alert",
      text: "This is a great alert, isn't it?",
      icon: "error"
    })
  });
}


export { loadDynamicBannerText };
export { bindSweetAlertButtonDemo };