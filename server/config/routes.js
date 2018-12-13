const mongoose = require('mongoose'),
Cake = mongoose.model('Cake'),
Rating = mongoose.model('Rating');
Cakes = require('../controllers/cakes')

module.exports = function(app){
  app.get('/cakes', Cakes.index);
  app.get('/cakes/:id/', Cakes.getOne);
  app.post('/cakes', Cakes.create);
  app.put('/cakes/:id/', Cakes.update);
  app.delete('/cakes/:id/', Cakes.delete);
  app.get('/ratings', Cakes.index_ratings);
  app.get('/ratings/:id/', Cakes.getOneRating);
  app.post('/cakes/:id', Cakes.create_rating);
  app.put('/ratings/:id/', Cakes.update_rating);
  app.delete('/ratings/:id/', Cakes.delete_rating);
}