# Blog Api Project

## Used technologies & Methods:
* Node.Js
* Express.Js
* Mongoose - MongoDB SQL
* Object Mapping (ORM)
* Password Crypto
* Cookies / Session

-----

### ERD Diagram
![ERD](./img/erdBlogAPI.png)

### Node.js - Mongoose structure in the project
![Mongoose](./img/mongoose.png)

### Steps to be taken before running the project.

```
$ npm init -y
$ npm i express dotenv express-async-errors
$ npm i mongoose
$ echo PORT=8000 > .env
$ echo MONGODB=mongodb://127.0.0.1:27017/blogApi >> .env
$ cp ./env-sample ./.env
$ $ npm i cookie-session
$ nodemon // * Running *
```

### Folder/File Structure:

```
    img/
        erdBlogApi.png
        mongoose.png
    src/
        controllers/
            blogController.js
        models/
            blogModel.js
        routes/
            blogRoute.js
        dbConnection.js
        errorHandler.js
        sync.js
    .env-sample
    .gitignore
    index.js
    package-lock.json
    package.json    
    Readme.md
```
### Resources used
* https://mongoosejs.com/docs/queries.html
* http://expressjs.com/en/resources/middleware/cookie-session.html
* https://www.npmjs.com/package/cookie-session
* https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest


> Designed By DOGUKAN © Nov 2023