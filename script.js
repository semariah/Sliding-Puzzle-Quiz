class slidingBox {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  topSlideBox(){
    if (this.y === 0){
      return null
    }else{
      return new slidingBox(this.x, this.y-1);
    }

  }

  bottomSlideBox(){
    if (this.y === 3){
      return null
    }else{
      return new slidingBox(this.x, this.y+1);
    }
  }

  rightSlideBox(){
    if (this.x === 3){
      return null
    }else{
      return new slidingBox(this.x + 1, this.y);
    }

  }

  leftSlideBox(){
    if (this.x === 0){
      return null
    }else{
      return new slidingBox(this.x-1, this.y);
    }

  }

  getNextBox(){
    return [
      this/topSlideBox(), bottomSlideBox(), rightSlideBox(), leftSlideBox()
    ]
  }
}
