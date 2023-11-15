"use strict";

/* ------------------ ERROR HANDLER -------------------- */


module.exports = (err, req, res, next) => {
  
  const errorStatusCode = res?.errorStatusCode ?? 500;

  res.status(errorStatusCode).send({
    error: true,
    message: err.message, // bu satır errordan alınacak hata mesajı
    cause: err.cause, // bu satır errordan alınacak hata mesajı
    body: req.body, // JSON data gönderilir. hatayı görebbilmek için kullanılır.
  });
};