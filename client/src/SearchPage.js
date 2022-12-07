import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <input type="text" />
                <Button variant="outlined">Search</Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-45778036/original/36c0ae68-9d2c-4826-a6bb-43a1887d5c72.jpeg?im_w=720"
                location="Kirinyaga"
                title="Boat House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="Ksh3,500 / night"
                total="Ksh 13,000 total"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/13d54ef5-a282-425c-99d0-7f594b80a477.jpg?im_w=320"
                location="Nairobi"
                title="Apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="Ksh 4000 / night"
                total="Ksh 20,000 total"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-52478121/original/41324e12-a073-4c34-81d4-95faf9424b1f.jpeg?im_w=720"
                location="Mombasa"
                title="Diani Beach"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="Ksh 3,500 / night"
                total="Ksh 20700 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Karen"
                title="Modern Houses"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="Ksh 5,500 / night"
                total="Ksh 32,000 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/ae48889f-6c62-4116-b5e9-82c63dde9cef.jpg?im_w=320"
                location="Kajiado"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="Ksh 6,000 / night"
                total="45,000 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Nairobi"
                title="The Blue Room"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="Ksh 6,500 / night"
                total="Ksh 48,000 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/13d54ef5-a282-425c-99d0-7f594b80a477.jpg?im_w=320"
                location="Naivasha"
                title="Tree House"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="Ksh 3,500 / night"
                total="Ksh 6,500 total"
            />
        </div>
    )
}

export default SearchPage
