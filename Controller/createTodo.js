// import the modules...................

const Todo = require("../Modules/Todo");

//defines routes handler.................
exports.createTodo =  async(req, res)=>{

    try{

        // extract title and description rom reqiues body.........
        const {title, description} = req.body;

        //create a new todo obj and insertnin db........
        const response = await Todo.create({title, description});
        res.status(200).json({

            success : true,
            data :response,
            message :'entry created succesfully'
        });
            
        
    }

    catch(err){

        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
           data :"internal server error",
           message : err.message, 
        })
    }


}