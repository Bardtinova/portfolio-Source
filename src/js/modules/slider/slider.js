export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        nextmodule = null,
        prevmodule = null,
        activeClass = '',
        animate,
        autoplay} = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e) {}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.nextmodule = document.querySelectorAll(nextmodule); // кнопка  второй страницы сайта modules
        this.prevmodule = document.querySelectorAll(prevmodule); // кнопка второй стсраницы сайта modules
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}