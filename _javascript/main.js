let app = Vue.createApp({
  data() {
    return {
      frontpageVisible: true,
      mostAVisible: false,
      mostBVisible: false,
      mostCVisible: false,
      mostDVisible: false,
      warningDisplay: false,
      odgovori: [],
      totalA: 0,
      totalB: 0,
      totalC: 0,
      totalD: 0
    }
  },
  methods: {
    finishQuiz() {
      const odgovoriObjekt = $('form#formQuiz').serializeObject();
      this.odgovori = Object.values(odgovoriObjekt);
      
      this.totalA = this.odgovori.filter(x => x === 'A').length;
      this.totalB = this.odgovori.filter(x => x === 'B').length;
      this.totalC = this.odgovori.filter(x => x === 'C').length;
      this.totalD = this.odgovori.filter(x => x === 'D').length;
      
      if (!(this.totalA === 0 && this.totalB === 0 && this.totalC === 0 && this.totalD === 0)) {
        
        const najviseOdgovora = Math.max(this.totalA, this.totalB, this.totalC, this.totalD);
        
        this.frontpageVisible = false;
        
        window.scrollTo(0, 0);

        if (this.totalA == najviseOdgovora) {
          this.mostAVisible = true;
        } else if (this.totalB == najviseOdgovora) {
          this.mostBVisible = true;
        } else if (this.totalC == najviseOdgovora) {
          this.mostCVisible = true;
        } else {
          this.mostDVisible = true;
        }
      } else {
        this.warningDisplay = true;
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
})

app.mount('#kviz');


// General
var screenWidth = document.querySelector('body').offsetWidth;

// Animacije
if (screenWidth > 768) {
  // Image 1
  gsap.from('.image_1 img', {
    x: -.5 * screenWidth,
    ease: 'power2.out',
    duration: 2,
    scrollTrigger: {
      trigger:'.image_1',
      start: 'top 50%'
    }
  })
  // Image 2
  gsap.from('.image_2 img', {
    x: .5 * screenWidth,
    ease: 'power2.out',
    duration: 2,
    scrollTrigger: {
      trigger:'.image_2',
      start: 'top 50%'
    }
  })
  // Image 3
  gsap.from('.image_3 img', {
    x: -screenWidth,
    ease: 'power2.out',
    duration: 2,
    scrollTrigger: {
      trigger:'.image_3',
      start: 'top 50%'
    }
  })
  // Image 4
  gsap.from('.image_4 img', {
    x: .6 * screenWidth,
    ease: 'power2.out',
    duration: 2,
    scrollTrigger: {
      trigger:'.image_4',
      start: 'top 50%'
    }
  })

} else if ( screenWidth < 769) {
  // Image 1
  gsap.from('.image_1 img', {
    x: -screenWidth,
    ease: 'power2.out',
    duration: 1,
    scrollTrigger: {
      trigger:'.image_1',
      start: 'top 50%'
    }
  })
  // Image 2
  gsap.from('.image_2 img', {
    x: screenWidth,
    ease: 'power2.out',
    duration: 1,
    scrollTrigger: {
      trigger:'.image_2',
      start: 'top 50%'
    }
  })
  // Image 3
  gsap.from('.image_3 img', {
    x: -screenWidth,
    ease: 'power2.out',
    duration: 1,
    scrollTrigger: {
      trigger:'.image_3',
      start: 'top 50%'
    }
  })
  // Image 4
  gsap.from('.image_4 img', {
    x: screenWidth,
    ease: 'power2.out',
    duration: 1,
    scrollTrigger: {
      trigger:'.image_4',
      start: 'top 50%'
    }
  })
}