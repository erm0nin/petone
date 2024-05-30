window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
})

// SHOW FAQs SECTION

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
  faq.addEventListener('click', ()=>{
    faq.classList.toggle('open');

    // Change icon
    const icon = faq.querySelector('.faq__icon svg');
    if(icon.className === 'plus'){
      icon.className = 'minus';
    }
  });


  });