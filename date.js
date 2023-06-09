
exports.getDate = function(){

    const today = new Date();

    const options = {
        weekday: "long", 
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    return today.toLocaleDateString("en-US", options);

};


exports.getDay = function(){

    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);

};

exports.getMonth = function(){
    const today = new Date();

    const options = {
        month: "long",
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getWeek = function() {


     var tdt = new Date(new Date().valueOf());
     var dayn = (new Date().getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    };

// console.log(module.exports)