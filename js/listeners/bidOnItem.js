import { bidOnListingUrl } from "../api/urls.js";
import { token, bidForm, bidMessage } from "../variables/const.js"

export function setBidOnListingListener() {
    bidForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const bidForm = event.target;
        const formData = new FormData(bidForm);
        const bidData = [Object.fromEntries(formData.entries())];
        const bid = bidData.map(({amount}) => +amount);

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

        successMessage(result.bids);


    } catch(error) {
        console.log(error);
        bidMessage.innerText = `Sorry! Your bid must be higher than the current bid.`;
    }
}


function successMessage(bid) {

    for(let i = 0; i < bid.length; i++) {
        const newBid = bid[bid.length -1].amount;
        const currentBid = bid[bid.length -2].amount;
        if (bid.length === 0) {
            bidMessage.innerText = `Success! Your bid was accepted.`; 
        } else if (newBid > currentBid) {
            bidMessage.innerText = `Success! Your bid was accepted.`;         
        }
    }
}
