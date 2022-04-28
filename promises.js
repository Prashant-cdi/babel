
let timer = () => {
    return new Promise(resolve => {
       setTimeout(() => {
          resolve("Promise resolved after 5 seconds");
       }, 5000);
    });
 };
 
 let out = async () => {
    let msg = await timer();
    console.log(msg);
    console.log("hello after await");
 };

 out();