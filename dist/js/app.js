const ranges = document.querySelectorAll('.ranges');
console.log(ranges)
const progress = document.querySelector('.range-progress')
const maxVal = document.querySelector('.max-value')
const minVal = document.querySelector('.min-value')
ranges.forEach((range)=>{
     range.addEventListener('input',(e)=>{
          let min =parseInt(ranges[0].value);
          let max = parseInt(ranges[1].value);
        

         if((max-min)<0){
            if(e.target.classList.contains('min')){
                ranges[0].value = max
            }else{
                ranges[1].value = min
            }
         }else{
          maxVal.textContent = `$${max}`;
          minVal.textContent = `$${min}`;
            progress.style.left = ((min / ranges[0].max) * 100) + '%';
            progress.style.right = 100 - (max / ranges[1].max) * 100 + '%';
         }
        //   let leftValue = (min/ranges[0].max)*100 + "%";
        //   let rightValue = 100-((max/ranges[1].max)*100) + "%"
        //   console.log(rightValue)
        
     })
})


// form select 
const selectBtn = document.querySelector('.select-btn')
const options = document.querySelectorAll('.option li')
selectBtn.addEventListener('click', (e) => {
     selectBtn.classList.toggle('active');
})


options.forEach((option) => {
     option.addEventListener("click", (e) => {
          let value = e.target.innerText;

          selectBtn.firstElementChild.innerText = value
          selectBtn.classList.remove('active')

     })

})

// roange toggler
const rangeToggle = document.querySelector('.range-toggler')
const rangeForm = document.querySelector('.range-form');
rangeToggle.addEventListener('click',()=>{
     rangeToggle.classList.toggle('range-active')

     if(rangeToggle.classList.contains('range-active')){
          rangeForm.style.display = 'block'
     }else{
          rangeForm.style.display = 'none'
     }

})

//hamburger menu

const ham = document.querySelector('.ham')
const navLinks = document.querySelector('.nav-links')

ham.addEventListener('click',(e)=>{
     ham.classList.toggle('wow')

     if(ham.classList.contains('wow')){
          ham.getLottie().playSegments([0,31],true)
        navLinks.classList.add('active')
     }else{
          console.log('he')
          ham.getLottie().playSegments([31,0],true)
          navLinks.classList.remove('active')
     }
})



// new range

