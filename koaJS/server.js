
const koa = require("koa");
const koaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");
const fs = require('fs');

const app = new koa();
const router = koaRouter();


router.get("/", async (context) => {
    context.body = { "content": JSON.parse(fs.readFileSync("./people.json")) };
});



// Create Route
router.post("/posts", async (context) => {

    const body = context.request.body;

    const jsonString = JSON.stringify(body);

    fs.writeFile('./people.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });


});




router.put("/posts/:id", async (context) => {
    const incomingUsers = JSON.parse(fs.readFileSync("./people.json"));
    console.log("THIS IS THE CONTEXT", context);
    const body = context.request.body;
    const userToBeInserted = {
        id: body.id,
        name: body.name,
        age: body.age,
        location: body.location
    };

    incomingUsers.push(userToBeInserted);
    const jsonString = JSON.stringify(incomingUsers);

    fs.writeFile('./people.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });

    let status = false;
    try {
        status = true;
        throw new Error("whatever");
        // fs.writeFileSync('./people.json', jsonString);
    } catch (err) {
        context.status = 404;
        status = false;
    }
    context.body = { "Success": status };
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000, () => { console.log('Server listining on port 3000'); });