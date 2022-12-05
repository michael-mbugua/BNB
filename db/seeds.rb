# CREATE HOUSES 
puts "seeding...."

house=House.create(house_type:"Marumbi",image:"https://a0.muscache.com/im/pictures/miso/Hosting-29271568/original/b8cc1b7b-36e9-474e-b77b-872c2fcde977.jpeg?im_w=1200",price:20000,location:"Tanzania",description:"Two Private Villas located along the shores of Chwaka Bay, each with spectacular views of the ocean. 
    This incredible scenery, along with its own private pool & large deck is surrounded by a tropical lush garden and a shared walkway to the beach. The private Jetty extending into the ocean is shared by both villas and offer an ideal place to lounge or line fish during high tide.",ratings:4.1,capacity:10,owner_id:1,beds:3)
house=House.create(house_type:"Diani Beach",image:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-52478121/original/41324e12-a073-4c34-81d4-95faf9424b1f.jpeg?im_w=720",price:30000,location:"Kenya",description:"The space
    Saffron is ideal for couples, solo travelers and friends. We are an adults only property focused on giving guests a tranquil stay to relax, rejuvenate and recharge.
    
    The villas are designed to embrace tropical contemporary living. The finishes, furniture and furnishings have a strong coastal flair ensuring that the vibe is completely laid back. The kitchens are fully equipped for guests to whip up light or for the more passionate cooks gourmet style meals. The stucco pools are heavenly to frolic in for hours on end. Guests have easy access to the beach via a private path.",ratings:5.0,capacity:2,owner_id:1,beds:1)
house=House.create(house_type:"Tree House",image:"https://a0.muscache.com/im/pictures/13d54ef5-a282-425c-99d0-7f594b80a477.jpg?im_w=320",price:2000,location:"Naivasha",description:"Tree house is inside guesthousejane its ideal for 1- 5 guests with toilet and a sink inside , has a hot shower under the treehouse( the bathroom is being upgraded) ,meals are  available in our restaurant .  Situated 5 min walk from  Naivasha town   ideal for all tours around lake Naivasha Nakuru Mara, or stopover",ratings:4.5,capacity:2,owner_id:1)
house=House.create(house_type:"Farm stay",image:"https://a0.muscache.com/im/pictures/ae48889f-6c62-4116-b5e9-82c63dde9cef.jpg?im_w=320",price:16000,location:"Kajiado",description:"* Now with 24/7 solar power! * Extra-cool and off-grid container house hanging off a cliff, with resident leopards, in an easy (and near totally tarmac) drive from Nairobi. Come stay at my home and enjoy hanging out with the dogs, picking and eating vegetables from the garden and feeding and even milking the goats!",ratings:4.71,capacity:4,beds:4,owner_id:1)
house=House.create(house_type:"Boat",image:"https://a0.muscache.com/im/pictures/miso/Hosting-45778036/original/36c0ae68-9d2c-4826-a6bb-43a1887d5c72.jpeg?im_w=720",price:1500,location:"Kiserian",description:"The Dhow, listed under the OMG! category of Airbnb and for a very good reason!  The Dhow is a one-of-a-kind boat blending the uniqueness of the Swahili coast with breathtaking views of the Rift Valley.   Contemporary finishes and amenities melt into the traditional by-years of a time-honored fishing boat.",ratings:5.0,capacity:2,owner_id:1,beds:1)
house=House.create(house_type:"condo",image:"https://a0.muscache.com/im/pictures/fef81b9f-c426-477b-b663-f4743737d8a3.jpg?im_w=720",price:2100,location:"Nairobi",description:"A cozy haven in a friendly neighborhood located in Racecourse area, off Ngong road. Guests enjoy close proximity to major shopping malls like The Junction mall, The Hub in Karen, Valley arcade and Yaya Centre which host a variety of eateries, entertainment spots, supermarkets, health clinics & other stores. There is a jockey club within a walking distance for the horse lovers! During your stay you have access to a pool, gym, manned security around the clock, free parking & a jogging",ratings:4.6,capacity:2,owner_id:1)
house=House.create(house_type:"Apartment",image:"https://a0.muscache.com/im/pictures/miso/Hosting-45775553/original/974aa766-7927-4503-9a3b-78426b5e5be1.jpeg?im_w=720",price:5500,location:"Nairobi",description:"
    A centrally located apartment in the leafy Kilimani, a five min walk away from Yaya Center and Adlife mall and 30 min to the airport( depending on traffic).
    
    An incredibly comfortable King-size orthopedic mattress and fresh and clean linens with a bedroom balcony overlooking the city skyline and an-equipped kitchen. High speed Wifi and plenty of parking and a back up generator",ratings:4.8,capacity:2,owner_id:1,beds:1)
house=House.create(house_type:"Tree house",image:"",price:3500,location:"Karen",description:"Stay in a fully furnished tree house on the Ngong House 10acres estate in the Karen/Langata area, at walking distance from the Giraffe Centre. 
    Only 10 minutes away from the  elephant orphanage and Nairobi National Park.
    Jomo Kenyatta International Airport is only a good half an hour away. Wilson airport at 10 to 15 min.",ratings:5.0,capacity:4,owner_id:1,beds:2)
house=House.create(house_type:"Cottage",image:"https://a0.muscache.com/im/pictures/83961080-5941-4004-9857-772ae58c4196.jpg?im_w=720",price:1800,location:"Kajiado",description:"The cave experience is one of the most exotic homes created for holiday lovers ,readers,friends and families who need a break from the norm. with the amazing views of the hills from the house ,will make you feel relaxed ,calmed and refreshed.",ratings:5.0,capacity:2,owner_id:1,beds:2)

# CREATE USER DATA
user=User.create(name:"Michael",email:"kamirimichael369@gmail.com",phone_number:254712345678,house_id:2)
user=User.create(name:"joseph",email:"joseph@gmail.com",phone_number:2547745321891,house_id:3)
user=User.create(name:"ellis",email:"ellis@gmail.com",phone_number:254745321892,house_id:6)
user=User.create(name:"john",email:"john@gmail.com",phone_number:254745321893,house_id:8)
user=User.create(name:"doreen",email:"doreen@gmail.com",phone_number:254745321894,house_id:1)
user=User.create(name:"joyann",email:"joy@gmail.com",phone_number:254745321896,house_id:4)
user=User.create(name:"davis",email:"davis@gmail.com",phone_number:254745321897,house_id:3)
user=User.create(name:"scott",email:"scott@gmail.com",phone_number:254745321898,house_id:7)
user=User.create(name:"Frankline",email:"Frankline@gmail.com",phone_number:254745321812,house_id:9)

# create owner
owner=Owner.create(name:"michael mbugua")

# create Bookings

booking=Booking.create(name:"mike",house_id:2,check_in_date:2022-12-04,check_out_date:2022-12-11,total:10000)

puts "Done seeding"

