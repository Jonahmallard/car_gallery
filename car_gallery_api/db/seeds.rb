cars =  [
    {
      "id": 1,
      "year": 2016,
      "make": "Toyota",
      "model": "Scion FR-S",
      "image": "https://file.kelleybluebookimages.com/kbb/base/evox/StJ/10531/2016-Scion-FR-S-front-angle6_10531_116_640x480.jpg",
      "likes": 5,
      "dislikes": 1,
      "category_id": 1
    },
    {
      "id": 2,
      "year": 1996,
      "make": "Nissan",
      "model": "Skyline",
      "image": "https://bestcarmag.com/sites/default/files/91477331996_nissan_skyline-pic-7446485517683503954.jpeg",
      "likes": 8,
      "dislikes": 1,
      "category_id": 1
    },
    {
      "id": 3,
      "year": 1968,
      "make": "Chevrolet",
      "model": "Nova",
      "image": "https://cdn.classicdigest.com/live/carimg/20501_20600/20504_f9d6824b8d407667.jpg",
      "likes": 3,
      "dislikes": 1,
      "category_id": 1
    },
    {
      "id": 4,
      "year": 1967,
      "make": "Mini",
      "model": "Cooper",
      "image": "https://bringatrailer.com/wp-content/uploads/2019/10/1967_austin_mini_cooper_s_1571942346c519f6b34c9898DSC_0437-e1571966832781.jpg?fit=940%2C627",
      "likes": 4,
      "dislikes": 1,
      "category_id": 1
    },
    {
      "id": 5,
      "year": 2017,
      "make": "Ford",
      "model": "F-150 SVT Raptor",
      "image": "https://s1.cdn.autoevolution.com/images/models/FORD_F-150-SVT-Raptor-2017_main.jpg",
      "likes": 1,
      "dislikes": 1,
      "category_id": 2
    },
    {
      "id": 6,
      "year": 1992,
      "make": "Ford",
      "model": "Ranger",
      "image": "https://s1.cdn.autoevolution.com/images/models/FORD_F-150-SVT-Raptor-2017_main.jpg",
      "likes": 2,
      "dislikes": 1,
      "category_id": 2
    },
    {
      "id": 7,
      "year": 2006,
      "make": "Honda",
      "model": "Grom",
      "image": "https://s1.cdn.autoevolution.com/images/models/FORD_F-150-SVT-Raptor-2017_main.jpg",
      "likes": 3,
      "dislikes": 1,
      "category_id": 3
    },
    {
      "id": 8,
      "year": 2011,
      "make": "Yamaha",
      "model": "Raptor",
      "image": "https://s1.cdn.autoevolution.com/images/models/FORD_F-150-SVT-Raptor-2017_main.jpg",
      "likes": 1,
      "dislikes": 1,
      "category_id": 3
    }
  ]

# Car.create(year: 1977, make: "Yamaha", model: "Raptor", image: "17363816")

Category.create(name: "Cars")
Category.create(name: "Trucks")
Category.create(name: "Recreational Vehicles")

cars.each do |car|
    Car.create(year: car[:year], make: car[:make], model: car[:model], image: car[:image], likes: car[:likes], dislikes: car[:dislikes], category_id: car[:category_id])
end