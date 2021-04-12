const mongoose = require('mongoose')

var l = mongoose.connect('mongodb+srv://server-for-app:server-for-app@cluster0.h8obu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true
})

console.log(l);