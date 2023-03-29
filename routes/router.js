const express= require('express')
const router = express.Router()


const authController= require('../controllers/authController.js')

//const conexion = require ('../database/db')
// router para las vistas
router.get('/', authController.isAuthenticated,(req,res)=>{
    //conexion()
    res.render ('index',{user:req.user})
})
router.get('/login',(req,res)=>{
    res.render ('login',{alert:false})
})
router.get('/register',(req,res)=>{
    res.render ('register')
})



//router para los metodos del controller
router.post('/register',authController.register)
router.post('/login',authController.login)
router.get('/logout',authController.logout)


module.exports=router
