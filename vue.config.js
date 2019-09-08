const MovieList =require('./data/data.json')
module.exports={
    devServer:{ 
        before:function(app,server){
            app.get('/getMovieList',(req,res)=>{
                res.json({
                    list:MovieList
                })
            })
        }}
       
    
}