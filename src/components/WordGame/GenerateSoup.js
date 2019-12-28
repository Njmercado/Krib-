export default class WordGame{

  constructor(words, cols=15){
    this.cols = cols
    this.grid = []   
    this.abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
      'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q' , 
      'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(var i=0; i<cols; i++){
      var row = []
      for(var j=0;j<cols;j++){
        row.push('.')
      }
      this.grid.push(row)
    }
    this.words = words
  }

  getGrid(){
    for(var i=0; i < this.cols; i++){
      for(var j =0; j<this.cols;j++){
        if(this.grid[i][j] == "."){
          const index = this.random(1, this.abc.length-1)
          this.grid[i][j] = this.abc[index] 
        }
      }
    }
    return this.grid
  }

  getWords(){
    return this.words
  }

  random(count, max){
    var values = []
    for(var i=0;i<count;i++){
      values.push(Math.floor(Math.random()*max))
    }
    return values
  }

  isValid(word, x, y, hor_ver){
    let avaliableLen = 0, gridSubCopy = []
    if(hor_ver == 0){ //horizontal
      avaliableLen = this.grid[y].slice(x).length
      gridSubCopy = this.grid[y].slice(x, x + word.length)
    }
    else{//vertical
      avaliableLen = this.grid.slice(y).length
      for(val of this.grid.slice(y, y + word.length)){
        gridSubCopy.push(val[x])
      }
    }

    if( avaliableLen >= word.length){
      for(var [index,val] of gridSubCopy.entries()){
        if( val != '.' && val != word[index] ){
          return false
        }
      }
      return true
    }else{ 
      return false
    }
  }

  fillRow(word, x, y, iteration){
    if (this.isValid(word, x, y, 0) ){
      for(var i=0; i < word.length; i++){
        this.grid[y][i+x] = word[i] 
      }
    }
    else{
      if (iteration <= 50){
        [x,y]=this.random(2,this.cols-1)
        this.fillRow(word, x, y, iteration+1)
      } else{
        this.fillCol(word, x, y)
      }
    }
  }

  fillCol(word, x, y, iteration=0){
    if (this.isValid(word, x, y, 1)){
      for(var i=0; i < word.length; i++){
        this.grid[i+y][x] = word[i] 
      }
    }else{ 
      if (iteration <= 50){
        [x,y]=this.random(2,this.cols-1)
        this.fillCol(word, x, y, iteration+1)
      }else{
        this.fillRow(word, x, y)
      }
    }
  }

  generator(){
    for (let [index, word] of this.words.entries()) {
      let [x,y]=this.random(2,this.cols-1)
      if (index%2 == 0){ 
        this.fillCol(word, x, y)
      }else{ 
        this.fillRow(word, x, y) 
      }
    }
  }
}
