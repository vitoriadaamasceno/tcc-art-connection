const path = require("path");

class ViewsController {

    async index(req, res) {
        res.render("index");
        //pagina inicial
    }
    
    async login(req, res) {
        res.render("login");
    }

    async register(req, res) {
        res.render("register");
    }

    async bio(req, res) {
        res.render("bio");
     }
}

module.exports = new ViewsController();