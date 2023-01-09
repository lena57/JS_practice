class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
}

const newComment = new Comment('your first comment')
console.log(newComment)

//operator instanceof checks if instance (newComment) belongs to a particular class
// (class Comment or global class Object)
const instComm = newComment instanceof Comment  //true
console.log('instComm', instComm)

const instObj = newComment instanceof Object //true
console.log('instObj', instObj)

//method upvote() is inherited by instance newComment from his parent prototype Comment

newComment.upvote();
console.log(newComment)
newComment.upvote();
newComment.upvote();
newComment.upvote();
console.log('newComment.votesQty', newComment.votesQty)  //4

//method hasOwnProperty checks if the object has a proper property
const hasText = newComment.hasOwnProperty('text')
console.log('hasText', hasText)// true
const hasUpvote = newComment.hasOwnProperty('upvote')
console.log('hasUpvote', hasUpvote)// false
// because upvote methods belongs to Comment class and inherited from Comment class
const hasHasOwnProperty = newComment.hasOwnProperty('hasOwnProperty')
console.log('hasHasOwnProperty', hasHasOwnProperty)// false
// because hasHasOwnProperty methods belongs to Object class and
// inherited from Object class


class Comments {
  constructor(text){
    this.text = text;
    this.voteQty = 0;
  }
  upvote(){
    this.voteQty += 1;
  }
  static merge(first, second){ // static methods are not inherited by its instances
    return `${first} ${second}`
  }
}
const merge1 = Comments.merge('first', 'and second')
console.log('merge for Comments:', merge1)

const firstComment = new Comments('hi')
const res = firstComment.hasOwnProperty('merge')
console.log(res) //false

const merge2 = firstComment.merge('first', 'and second') //error
console.log('merge for firstComment:', merge2)
