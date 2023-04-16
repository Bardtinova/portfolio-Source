import Slider from './slider';

export default class MainSlider extends Slider { // работа с главным слайдером на первой странице
    constructor(page, btns) {
        super(page, btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1; 
        }

       if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e) {}


        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    toggleButtons(buttons, n) { //метод для переключения слайдеров на modules.html (вторя страница сайта)
        buttons.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation(); // отмена всплытия события
                e.preventDefault();
                this.plusSlides(n);
            });
        });
    }

    bindTriggers () {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.toggleButtons(this.prevmodule, -1); // переключение сладов на второй странице сайта
        this.toggleButtons(this.nextmodule, 1);
       
    }
    

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}

            this.showSlides(this.slideIndex);
            
            this.bindTriggers();
        } 
    }
}