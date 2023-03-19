import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { stringLength } from '@firebase/util'
import { ProductCarouselInterface } from './types/product-carousel.interface'

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: ProductCarouselInterface[] = []
  currentIndex = 0
  timeoutId?: number
  imgSrc = ''
  ngOnInit(): void {
    this.resetTimer()
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId)
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId)
    }
    //this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1

    this.resetTimer()
    this.currentIndex = newIndex
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1

    this.resetTimer()
    this.currentIndex = newIndex
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer()
    this.currentIndex = slideIndex
  }

  getCurrentSlideUrl() {
    if (this.slides.length > 0) return `url('${this.slides[this.currentIndex].url}')`
    return ''
  }

  opemImage(): void {
    this.imgSrc = `${this.slides[this.currentIndex].url}`
  }
  closeModal(): void {
    this.imgSrc = ''
  }
}
