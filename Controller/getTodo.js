const Todo = require("../Modules/Todo");

// import the model........
const Todo = require = ("../Modules/Todo.js");

//define route handler....................
exports.getTodo = async(req, res)=>{

    try{

        //fetch all the todo items from database...............
        const todos = await Todo.find({});

        //response...........................
        res.status(200).json({

            success :true,
            data : todos,
            message : "entire todo data is fetched",
        });
    }

    catch(err){
        console.error(err);
        res.status(500).json({
            success :false,
            error :err.message,
            message :'server error',
        });
    }
}

exports.getTodoById = async(req, res)=>{

    try{

        //extract todo items basic on id..................
        const id = req.params.id;
        const Todo = await Todo.findById({_id:id})

        //data for given id is not found.....................

        if(!todo){
            return res.status(404).json({
                success : true,
                data :todo,
                message :'Todo ${id} data is succesfully fetched',
            })
        }
    }
    
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
    }

}