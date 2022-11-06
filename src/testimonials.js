window.data = function() {
    return {
        testimonials: [
            {
                active: true,
                image: "./images/image-tanya.jpg",
                message: "I’ve been interested in coding for a while but never taken the jump, until now. \n" +
                    "  I couldn’t recommend this course enough. I’m now in the job of my dreams and so \n" +
                    "  excited about the future.",
                name: "Tanya Sinclair",
                job: "UX Engineer",
            },
            {
                active: false,
                image: "./images/image-john.jpg",
                message: "If you want to lay the best foundation possible I’d recommend taking this course. \n" +
                    "  The depth the instructors go into is incredible. I now feel so confident about \n" +
                    "  starting up as a professional developer.",
                name: "John Tarkpor",
                job: "Junior Front-end Developer",
            },
        ],

        activeSlide: [],

        get showSlide() {
            this.activeSlide = this.testimonials.filter(slide => slide.active === true);
            return this.activeSlide[0];
        },

        prevSlide() {
            this.activeSlide[0].active = false;
            if (this.testimonials.indexOf(this.activeSlide[0]) === 0) {
                this.testimonials[this.testimonials.length - 1].active = true;
            } else {
                this.testimonials[this.testimonials.indexOf(this.activeSlide[0]) - 1].active = true;
            }
        },

        nextSlide() {
            this.activeSlide[0].active = false;
            if (this.testimonials.indexOf(this.activeSlide[0]) === (this.testimonials.length - 1)) {
                this.testimonials[0].active = true;
            } else {
                this.testimonials[this.testimonials.indexOf(this.activeSlide[0]) + 1].active = true;
            }
        },

        animation: false,
        animate() {
            this.animation = true;
            setTimeout(function() {this.animation = false}.bind(this) ,800);
        }
    }
}