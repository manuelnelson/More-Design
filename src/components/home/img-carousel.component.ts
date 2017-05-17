import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models';
@Component({
    selector: 'image-carousel',
    template: require('./img-carousel.component.html')
})
export class ImageCarouselComponent implements OnInit {
    @Input() images: Array<Image>;
    imageNdx: number = 0;
    prevImageNdx: number = 0;
    constructor() {
    }
    ngOnInit() {
        if(this.images.length == 0)
        {
            window.setTimeout(()=>this.ngOnInit(),1000)
            return;
       }
       this.images[this.imageNdx].visible = true;
        window.setInterval(()=>{
            if(this.imageNdx < this.images.length - 1){
                this.images[this.prevImageNdx].visible = false;
                this.images[this.imageNdx].visible = true;
                this.prevImageNdx = this.imageNdx;
                this.imageNdx++;
                return;
            }
            if(this.imageNdx == this.images.length - 1){
                this.images[this.prevImageNdx].visible = false;
                this.images[this.imageNdx].visible = true;
                this.prevImageNdx = this.imageNdx;
                this.imageNdx = 0;
                return;
            }
        }, 5000);
    }

}
