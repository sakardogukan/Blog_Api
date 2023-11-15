"use strict"

/* ------------------ SEARCHING & SORTING & PAGINATION -------------------- */

module.exports = (req, res, next) => {

    //! SEARCHING --> URL?search[title]='Test-'&search[content]='Content-0'
    const search = req.query?.search || {}
    // console.log(req.query)
    for (let key in search) search[key] = { $regex: search[key], $options: 'i' } //? "i": Case Insensitive
    // console.log(req.query)

    //! SORTING --> URL?sort[title]=1&sort[createdAt]=-1 //? Mongoose v.8 ve üzerinde "1" yerine ASC yazılmalıdır.
    const sort = req.query?.sort || {}

    //! PAGINATION --> URL?page1&limit=10
    // const limit = req.query?.limit || 20
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number((process.env?.PAGE_SIZE || 20))
    console.log('limit', limit)

    let page = Number(req.query?.page) //? BackEnd'de SayfaNo herzaman "-1" dir.
    page = (page > 0 ? page : 1) - 1
    console.log('page', typeof page, page)

    let skip = Number(req.query?.skip) //? istenilirse sayfada URL'de skip değeri verilebilir.
    skip = skip > 0 ? skip : (page * limit)
    console.log('skip', typeof skip, skip)

    //! RUN:
    req.getModelList = async (Model, populate = null) => {
        return await Model.find(search).sort(sort).skip(skip).limit(limit).populate(populate)
    }

    //Details:
    req.getModelListDetails = async (Model) => {
        const data = await Model.find(search)
        let details = {
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        }
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
        if (details.totalRecords <= limit) details.pages = false
        return details
    }

    next()
}