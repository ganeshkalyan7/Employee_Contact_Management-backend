const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact");

router.get("/", contactForm.getContacts);
router.get("/getid/:id", contactForm.getById);
router.post("/create", contactForm.createContact);
router.put("/update/:id", contactForm.updateContact);
router.delete("/delete/:id", contactForm.deleteContact);

module.exports = router;
