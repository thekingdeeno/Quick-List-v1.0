const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();

const items = [];
const workItems = [];
const weekItems = [];
const monthItems = [];
const otherItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){



    const day = date.getDate();
    // console.log(day);


    res.render("list", {
        listTitle : day,
        newListItems: items,
    });

});

app.post("/", function(req, res){

    const item = req.body.newToDo;


    switch (req.body.list) {
        case date.getDate():
            items.push(item);
            res.redirect("/");
            break;
        case "Week 23":
            weekItems.push(item);
            res.redirect("/week");
        break;
        case date.getMonth():
            monthItems.push(item);
            res.redirect("/month");
        break;
        case "Work List":
            workItems.push(item);
            res.redirect("/work");
        break;
        case "Other":
            otherItems.push(item);
            res.redirect("/other");
        break;
    
        default:
            console.log("There was an error!")
            break;
    }
    // console.log(req.body);

});

app.get("/work", function(req,res){
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems,
    });
});

app.get("/week", function(req,res){
    const weekNumber = date.getWeek();

    res.render("list", {
        listTitle: "Week " + weekNumber,
        newListItems: weekItems,
    });
});

app.get("/month", function(req,res){

    const month = date.getMonth();
    // console.log(month)


    res.render("list", {
        listTitle: month,
        newListItems: monthItems,
    });
});

app.get("/other", function(req,res){
    res.render("list", {
        listTitle: "Other",
        newListItems: otherItems,
    });
});

app.get("/about", function(req, res){
    res.render("about", {

    });
})



app.listen(3000, function(){
    console.log("Server is running on port 3000")
});