const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Rating = mongoose.model('Rating');

class Cakes{
  index(req, res){
    Cake.find({}, function(err, cakes){
      if(err){
        console.log("Returned errors", err);
        res.json({message: "error", error: err})
      }else{
        res.json({message: "success", data: cakes})
      }
    })
  }
  index_ratings(req, res){
    Rating.find({}, function(err, ratings){
      if(err){
        console.log("Returned errors", err);
        res.json({message: "error", error: err})
      }else{
        res.json({message: "success", data: ratings})
      }
    })
  }
  getOne(req, res){
    var cake_id = req.params.id;
    Cake.find({_id : cake_id}, function(err, cake){
      if(err){
        console.log("returned errors", err);
      }else{
        res.json({data: cake })
      }
    })
  }
  getOneRating(req, res){
    var rating_id = req.params.id;
    Rating.find({_id : rating_id}, function(err, rating){
      if(err){
        console.log("returned errors", err);
      }else{
        res.json({data: rating })
      }
    })
  }
  create(req, res){
    let cake = new Cake(req.body);
    cake.save(function(err){
      console.log(err);
      res.json("ok");
    });
  }
  create_rating(req, res){
    let rating = new Rating(req.body);
    rating.save(function(err){
      if (err){
        res.json({"status": "not ok", "errors": err});
      }
      else {
        Cake.findOne({_id:req.params.id}, function(err, cake){
          cake.rating.push(rating);
          let total = 0;
          for (let r of cake.rating){
              total += r['score'];
          }
          cake.avgrating = total/cake.rating.length;
          cake.save(function(err, rating){
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok", "rating": rating});
            }
        });
        })
      }
    });
  }
  update(req, res){
    Cake.findByIdAndUpdate(req.params.id, req.body,{runValidators: true}, (err,cake) =>{
    });
    res.json("updated")
  }
  update_rating(req, res){
    Rating.findByIdAndUpdate(req.params.id, req.body,{runValidators: true}, (err,rating) =>{
    });
    res.json("updated")
  }
  delete(req, res){
    Cake.findByIdAndDelete(req.params.id, function(err){
      res.json("deleted")
    });
  }
  delete_rating(req, res){
    Rating.findByIdAndDelete(req.params.id, function(err){
      res.json("deleted")
    });
  }
}
module.exports = new Cakes();