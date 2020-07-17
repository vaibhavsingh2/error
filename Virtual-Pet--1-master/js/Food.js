class Food{
    constructor(){
         foodStock="",
         lastFed=""
    }
    getFoodStock(){
        var foodRef  = database.ref('Food');
        foodRef.on("value",function(data){
           Food= data.val();
        })
    }
    updateFoodStock(){
        database.ref('/').update({
            Food: foodStock
          });
    }
    deductFood(){
        database.ref('/').update({
            Food: Food-1
          });
    }
    display(){
        var x=80, y=100;
        imageMode(CENTER);
        this.image=loadImage("../images/Milk.png");

        image(this.image,720,220,70,70);
        
     if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                    console.log("Hi")
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}