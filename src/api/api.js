class Api {
      constructor(){
            
      }

      fetchDate(){
            var promise = new Promise((resolve,reject)=>{
                  setTimeout(()=>{
                        resolve({success:'true',message:'your promise is fulfilled'})
                  },2000)
            });

            return promise;
            
      }

}