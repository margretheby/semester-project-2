import { bidOnListingUrl } from "../api/urls.js";
import { token, bidForm, bidMessage } from "../variables/const.js"

export function setBidOnListingListener() {
    bidForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const bidForm = event.target;
        const formData = new FormData(bidForm);
        const bidData = [Object.fromEntries(formData.entries())];

        console.log(bidData)
        const bid = bidData.map(({amount}) => +amount);
        console.log(bid);
        bidOnListing( {amount: bid[0]} );
    })
}


async function bidOnListing(bid) {
    try {
        const bidData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bid)
        };

        const response = await fetch(bidOnListingUrl, bidData);
        const result = await response.json();


    } catch(error) {
        console.log(error);
        console.log("nay");
    }
}


function errorMessage(bid) {
    for(let i = 0; i < bid.length; i++) {
        const lastBid = bid[bid.length -1].amount
        console.log(lastBid);
        if(newBid > lastBid) {
            console.log("yay")
            bidMessage.innerText = `Success! Your bid was accepted.`; 
        } else {
            bidMessage.innerText = `Sorry! Your bid must be higher than the current bid.`;
            console.log("nay")
        }
    }
}