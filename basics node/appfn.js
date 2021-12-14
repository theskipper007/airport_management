function greet(){
    console.log('hi');
}
greet();
function triggergreet(fn){
    fn();
}

triggergreet(greet);
