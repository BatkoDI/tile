const express = require("express");
const cors = require("cors");
const fs = require("fs");
const TelegramBot = require("node-telegram-bot-api");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* The variable in which the data received from the website from the user is recorded */
let customer;

/* Creature Bot for Telegram */
const token = "6194716905:AAHj-XtpgNTxbR1S48NsE49yNPb1SGmCJfI";
const chat_id = "5611384464"; 
const bot = new TelegramBot(token, {polling: true});

app.post("/order", (req, res)=>{
    customer = req.body;

    /* Writing data to file - dataBaseCustomer.txt */
    fs.appendFile(
        "dataBaseCustomer.txt", 
        `name:  ${customer.name}, \nphone: ${customer.phone}, \nemail: ${customer.email}, \nmessage: ${customer.message}, \n\n`, 
        function (err) {
            if(err) throw err;
        }
    );

    /* Sending an oder to Telegram */
    bot.sendMessage(chat_id, `name:  ${customer.name}, \nphone: ${customer.phone}, \nemail: ${customer.email}, \nmessage: ${customer.message}, \n\n`);
    
    res.send(true);
});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});