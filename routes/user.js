const express = require("express");
//const app = express();
let router = express.Router();


router.get('/user1',(req,res)=>{

    res.send("user12 page");
});

router.get('/user2',(req,res)=>{

    res.send("user22 page");
});

router.post('/createuser',(req,res)=>{
    res.send("new user added");
});

router.get('/user3/:id',(req,res)=>{
   // console.log(req.usery);

    res.send('retrive id value is '+req.params.id);

})

router.put('/user3/:id',(req,res)=>{

    res.send('update id value is '+req.params.id);
});

router.delete('/user3/:id',(req,res)=>{

    res.send('delete id value is '+req.params.id);
});

router.route('/:id').get((req,res)=>{ res.send('retrive id value is '+req.params.id);})
                    .put((req,res)=>{ res.send('update id value is '+req.params.id);  })
                    .delete((req,res)=>{ res.send('delete id value is '+req.params.id);});


const userss = [{name:"raja"},{name:"rani"},{name:"sepoy"}]

// router.param('id',(req,res,next)=>{
//     console.log(id);
//     req.usery = userss[id];
//     next();
// })

module.exports = router;





//router.listen(3000);