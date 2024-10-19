const mongoose = require('mongoose')
require('dotenv').config()
const PersonModel = require('./models/person');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));


createAndSavePerson = () =>{
    person = new PersonModel({
        name: "Zina",
        age: 31,
        favoriteFoods: ["tajine", "couscous"]
    })
    person.save().then(
      (data)=>{
        console.log('Person saved successfully:', data);
      },
      (err)=>{
        console.error('Error saving the person:', err);
      })
}

//createAndSavePerson()


addFood = (id, food) =>{
   
   PersonModel.findById(id)
             .then( data=>{
              if(!data){
                  console.log("data not found")
              }
              else{
                  data.favoriteFoods.push(food)
                  data.save().then(
                    (data)=>{
                      console.log('Food added ', data);
                    },
                    (err)=>{
                      console.error('Error adding food', err);
                    })

              }    
           })
}
//6712ecfdc80184198cc52d38
//addFood("6712ecfdc80184198cc52d38", "Lasagne")

UpdatePersonAge = (personName, personAge) =>{
  PersonModel.findOneAndUpdate(
    {name: personName},
    {age: personAge},
    {new: true}
  ).then((data)=>{
    console.log('person updated successfully ', data);
  },
  (err)=>{
    console.error('Error updating person', err);
  })
}
//UpdatePersonAge("Zina", 25)

deletePerson = (id)=>{
  PersonModel.findByIdAndDelete(id)
  .then((data)=>{
    console.log('person deleted successfully ', data);
  },
  (err)=>{
    console.error('Error deleting person', err);
  }

  )
}

//deletePerson("6712ecfdc80184198cc52d38")
