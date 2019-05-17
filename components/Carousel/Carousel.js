class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = document.querySelectorAll('.carousel img')
        this.imagesmap = Array.from(this.images)
        this.current = this.images[0];
        this.current.style.display = 'inline-block';
        this.carousel.addEventListener('click', () => {this.selectArrow()}
        );
    }
    selectArrow() {
        if (this.carousel.classList.contains('left-button')) {
            console.log('leftbutton');
            this.current.style.display = 'none';
            this.imagesmap.unshift(this.imagesmap.pop());
            this.current = this.imagesmap[0];
            this.current.style.display = 'inline-block';
        }
        else if (this.carousel.classList.contains('right-button')) {
            console.log('rightbutton')
            this.current.style.display = 'none';
            this.imagesmap.push(this.imagesmap.shift());
            this.current = this.imagesmap[0];
            this.current.style.display = 'inline-block';
        };
    }
}

let carousel = document.querySelectorAll('.carousel, .left-button, .right-button');
carousel.forEach(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
