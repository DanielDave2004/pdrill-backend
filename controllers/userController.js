//SQL
const connection = require('../config/db');

//Get all users
exports.getAllProducts=(req,res)=>{
    connection.query('SELECT * FROM product_info', (err,rows,fields)=>{
        if(err) throw err;
            res.json(rows);
    });
};


//Create a new user
//CRUD - Create
exports.createNewProduct=(req,res)=>{
    const {iName, uPrice, qt, sp}=req.body;
    connection.query('INSERT INTO product_info (itemName, unitPrice, quantity, supplier) VALUES (?,?,?,?)',[iName,uPrice,qt,sp],(err,result)=>{
        if(err) throw err;
            res.json({message: 'Products created succesfully', userId:result.insertId});
    });
};