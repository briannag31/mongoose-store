const express = require("express")
const itemRouter = express.Router()
const Items = require('../models/items')
const itemsSeedData = require("../models/itemsSeed")

//Seed Route -- DONE
itemRouter.get('/seed', (req, res) => {
    Items.deleteMany({}, (err, deletedItems) => {
        Items.create(itemsSeedData, (err, data) => {
            res.redirect('/store');
        });
    });
});

//Index -- DONE
itemRouter.get('/', (req, res) => {
    Items.find({}, (err, allItems) => {
        res.render('index.ejs', {items: allItems});
    });
});

//New -- DONE
itemRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Delete -- DONE
itemRouter.delete("/:id", (req, res) => {
    Items.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/store")
    })
  })

//Update -- DONE
itemRouter.put("/:id", (req, res) => {
    Items.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
      (error, updatedItem) => {
        res.redirect(`/store/${req.params.id}`)
      }
    )
  })

//Create -- DONE
itemRouter.post('/', (req, res) => {
    Items.create(req.body, (err, createdItem) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/store');
        }
    })
});

//Edit -- DONE
itemRouter.get("/:id/edit", (req, res) => {
    Items.findById(req.params.id, (error, foundItem) => {
        res.render("edit.ejs", {
            items: foundItem,
        })
    })
  })

//Show -- DONE

itemRouter.get('/:id', (req, res) => {
    Items.findById(req.params.id, (err, items) => {
        res.render('show.ejs', {items});
    });
})

module.exports = itemRouter