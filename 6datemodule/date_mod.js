exports.today=function(){ 
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate(); 
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    var dt=year + "-" + month + "-" + date //return date in YYYY-MM-DD format 
    return dt;
     }