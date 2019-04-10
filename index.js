function filter_list(l) {
    // Return a new array with the strings filtered out
    // var str = l.map((e) =>{
    //     if(typeof(e) === 'number'){
    //         return e;
    //     }else{
    //         num++;
    //     }
    // })
    // console.log(str);
    var numstr = Array();
    for(var i = 0,j = 0; i < l.length; i++){
        var num = 0;
        if(typeof(l[i]) === 'number'){
            numstr[j] = l[i];
            j++;
        }
    }
    console.log(numstr);
  }
  filter_list([1,2,'a','b']);
  filter_list([1,'a','b',0,15]);
  filter_list([1,2,'aasf','1','123',123])