import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-29271568/original/b8cc1b7b-36e9-474e-b77b-872c2fcde977.jpeg?im_w=1200"
                house_type="Marimba"
                description="Two Private Villas located along the shores of Chwaka Bay, each with spectacular views of the ocean. 
                This incredible scenery, along with its own private pool & large deck is surrounded by a tropical lush garden and a shared walkway to the beach. The private Jetty extending into the ocean is shared by both villas and offer an ideal place to lounge or line fish during high tide."
                price="KSH 8000/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-52478121/original/41324e12-a073-4c34-81d4-95faf9424b1f.jpeg?im_w=720"
                house_type="Diani Beach"
                description="The space
                Saffron is ideal for couples, solo travelers and friends. We are an adults only property focused on giving guests a tranquil stay to relax, rejuvenate and recharge.
                
                The villas are designed to embrace tropical contemporary living. The finishes, furniture and furnishings have a strong coastal flair ensuring that the vibe is completely laid back. The kitchens are fully equipped for guests to whip up light or for the more passionate cooks gourmet style meals. The stucco pools are heavenly to frolic in for hours on end. Guests have easy access to the beach via a private path."
                price="KSH 4,500/night"

            />
            <Card
                src="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                house_type="Condo"
                description="A cozy haven in a friendly neighborhood located in Racecourse area, off Ngong road. Guests enjoy close proximity to major shopping malls like The Junction mall, The Hub in Karen, Valley arcade and Yaya Centre which host a variety of eateries, entertainment spots, supermarkets, health clinics & other stores. There is a jockey club within a walking distance for the horse lovers! During your stay you have access to a pool, gym, manned security around the clock, free parking & a jogging"
                price="KSH 6,5000/night"

            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-45775553/original/974aa766-7927-4503-9a3b-78426b5e5be1.jpeg?im_w=720"
                house_type="Apartment"
                description="A centrally located apartment in the leafy Kilimani, a five min walk away from Yaya Center and Adlife mall and 30 min to the airport( depending on traffic).
    
                An incredibly comfortable King-size orthopedic mattress and fresh and clean linens with a bedroom balcony overlooking the city skyline and an-equipped kitchen. High speed Wifi and plenty of parking and a back up generator"
                price="KSH 13,000/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-45778036/original/36c0ae68-9d2c-4826-a6bb-43a1887d5c72.jpeg?im_w=720"
                house_type="Boat"
                description="The Dhow, listed under the OMG! category of Airbnb and for a very good reason!  The Dhow is a one-of-a-kind boat blending the uniqueness of the Swahili coast with breathtaking views of the Rift Valley.   Contemporary finishes and amenities melt into the traditional by-years of a time-honored fishing boat."
                price="Ksh 3,500/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-45775553/original/974aa766-7927-4503-9a3b-78426b5e5be1.jpeg?im_w=720"
                house_type="Apartment"
                description="A centrally located apartment in the leafy Kilimani, a five min walk away from Yaya Center and Adlife mall and 30 min to the airport( depending on traffic).
    
                An incredibly comfortable King-size orthopedic mattress and fresh and clean linens with a bedroom balcony overlooking the city skyline and an-equipped kitchen. High speed Wifi and plenty of parking and a back up generator"
                price="KSH 7000/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/b8966785-35fc-4962-932d-e5d38c0e5383.jpg?im_w=720"
                house_type="Beach"
                description="The cave experience is one of the most exotic homes created for holiday lovers ,readers,friends and families who need a break from the norm. with the amazing views of the hills from the house ,will make you feel relaxed ,calmed and refreshed."
                price="KSH 9000/night"
            /><Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-23130659/original/645ea1ec-b2cd-4e15-8316-75e7de654bb1.jpeg?im_w=720"
                house_type="Diani Beach"
                description="The cave experience is one of the most exotic homes created for holiday lovers ,readers,friends and families who need a break from the norm. with the amazing views of the hills from the house ,will make you feel relaxed ,calmed and refreshed."
                price="KSH 6000/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/83961080-5941-4004-9857-772ae58c4196.jpg?im_w=720"
                house_type="Cottage"
                description="The cave experience is one of the most exotic homes created for holiday lovers ,readers,friends and families who need a break from the norm. with the amazing views of the hills from the house ,will make you feel relaxed ,calmed and refreshed."
                price="KSH 3500/night"
            />
            </div>
            
        </div>
    )
}

export default Home
