"use strict"

/* ------------ Synchronization ------------ */

const User = require('./models/userModel')
const { BlogCategory, BlogPost } = require('./models/blogModel')

module.exports = async () => {

    /* USER -> BlogPost */
    const user = await BlogPost.findOne()
    if (user) {
        BlogPost.updateMany({
            'userId': { $exists: false } // field yok ise
        }, {
            'userId': user._id // Kaydı ata
            // $unset: {'userId:1} // field sil
        }).catch(err => console.log(err))
    }


    /* BlogPost -> BlogCategory */
    const blogCategory = await BlogCategory.findOne()
    if (blogCategory) {
        BlogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } // field yok ise
        }, { //? Update:
            "blogCategoryId": blogCategory._id // kaydı ata
            // $unset: { "blogCategoryId": 1 } // field sil
        }).catch(err => console.log(err))
    }

    
    // End:
    console.log('* Synchronised *')
    /* Finished */
}