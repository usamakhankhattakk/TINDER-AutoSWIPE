
  
var confirmBox = confirm('Start swiping right?');
var count = 1;
var k = 0;
//input how many likes you want
var likes= 5;



 function liked(){
    if (confirmBox){
      document.querySelector('[aria-label="Like"]').click();
      console.log('Liked ' + count);						  count++;
    k++;												};
    
};

//checking to like users 
function check(){
if (k<likes)
{

like();
//checking after every 6 sec
setTimeout(check,12000);

}
};






//like 3 users with every 3 sec difference between them
 function like(){
   let i;
    for ( i = 0; i <3; i++){
    task(i);
   };
  function task(i){
    setTimeout(liked,3000*i);
    };
    
};

//intialiation function to run swiping
 check();

// 1000 millisec=1sec


