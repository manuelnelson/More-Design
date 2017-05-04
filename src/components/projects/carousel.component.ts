import { Component, NgZone, Input, OnInit} from '@angular/core';
import { Slide } from '../../models';
@Component({
    selector: 'carousel-component',
    template: require('./carousel.component.html')
})
export class CarouselComponent implements OnInit{
    @Input() slides: Array<Slide>;
    nextSlideNdx: number = 0;
    currentSlideNdx: number = 0;
    currentTimeout: number = 0;
    animationInterval: number = 1000;
    slideInterval: number = 5000;
    slideTimer: number = 0;
    autoSlide: boolean = false;
    intervalRunning: boolean = false;
    constructor() {
    }
    ngOnInit(){
        this.slides[0].active = true;
        if(this.autoSlide){
            this.startInterval();
        }
    }
    startInterval(){
        this.slideTimer = window.setInterval(()=>{
            this.next(true);
            this.intervalRunning = true;
        },this.slideInterval)
    }
    clearInterval(){
        clearInterval(this.slideTimer);
        this.intervalRunning = false;
    }
    next(ignoreClear: boolean){
        // if(!ignoreClear)
        this.clearInterval();
        this.currentSlideNdx = this.nextSlideNdx;
        if(this.nextSlideNdx == this.slides.length -1)
            this.nextSlideNdx = 0;
        else
            this.nextSlideNdx++;
        this.transition(true);
    }
    previous(){
        this.clearInterval();
        this.currentSlideNdx = this.nextSlideNdx;
        if(this.nextSlideNdx == 0)
            this.nextSlideNdx = this.slides.length -1;
        else
            this.nextSlideNdx--;
        this.transition(false);
    }

    transition(goForward: boolean){
        if(goForward){
            this.slides[this.nextSlideNdx].left = true;
            this.slides[this.nextSlideNdx].active = true;
            window.setTimeout(()=>{
                this.slides[this.nextSlideNdx].left = false;
                this.slides[this.currentSlideNdx].right = true;
            },5)
        }
        else{
            this.slides[this.nextSlideNdx].right = true;
            this.slides[this.nextSlideNdx].active = true;
            window.setTimeout(()=>{
                this.slides[this.nextSlideNdx].right = false;
                this.slides[this.currentSlideNdx].left = true;
            },5)
        }
            this.currentTimeout = window.setTimeout(()=>{
                this.slides[this.currentSlideNdx].active = false;
                if(goForward)
                    this.slides[this.currentSlideNdx].right = false;
                else
                    this.slides[this.currentSlideNdx].left = false;
            if(this.autoSlide){
                this.startInterval();
            }
            },1000);            
    }

}
