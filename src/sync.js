"use strict";

/* ------------------ SYNCHRONISED -------------------- */

const User = require('../src/models/userModel')
const { BlogCategory, BlogPost } = require('./models/blogModel')

/* ------------------------------------------------------- */

//! CategoryID ve UserID'si olmayan BlogPOST'lara eklemelerin yapılması
/* ------------------------------------------------------- *
module.exports = async () => { 
    
    const user = await User.findOne() //Get first User: //! Blog Post --> User
    if (user) {
        BlogPost.updateMany({ //? Filters:
            "userId": { $exists: false } //? field yok ise
        }, {
            "userId": user._id //? Kaydı ara // Update:
            //$unset: {"userId": 1} //? Kaydı sil
        }).catch(err => console.log(err))
    }

    const blogCategory = await BlogCategory.findOne() // Get first BlogCategory: //! Blog Post --> Blog Category
    if (blogCategory) {
        const isUpdate = await BlogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } //? filed yok ise
        }, {            
            "blogCategoryId": blogCategory._id //? kaydı ara // Update:
            //$unset: {'blogCategoryId':1} //? filed sil
        }).catch(err => console.log(err))
    }        
    console.log('* Synchronised *') //End:
}
/* ------------------------------------------------------- */


//! DB'de bulunan bütün kayıtların silinmesi ve örnek dataların DB'e eklenmesi
/* ------------------------------------------------------- */
module.exports = async () => {

    // Deleted All Records:
    await User.deleteMany().then(() => console.log('- User Deleted All'))
    await BlogCategory.deleteMany().then(() => console.log('- BlogCategory Deleted All'))
    await BlogPost.deleteMany().then(() => console.log('- BlogPost Deleted All'))

    // Example User:
    const user = await User.create({
        email: 'test@test.com',
        password: '12345678',
        firstName: 'Test',
        lastName: 'Test'
    })

    // Example Category:
    const blogCategory = await BlogCategory.create({
        name: 'Test Category'
    })

    // Example Posts:
    for (let key in [...Array(50)]) {
        await BlogPost.create({
            userId: user._id,
            blogCategoryId: blogCategory._id,
            title: `Test ${key} title`,
            content: `Test ${key} content`,
            published: Boolean(key % 2)
        })
    }
    // End:
    console.log('* Synchronized *')
    /* Finished */
}
/* ------------------------------------------------------- */
