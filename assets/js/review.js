const apiURL = "assets/json/review.json";

function processToFrontEnd (ReviewsList) {
    let div_tag = document.getElementById("reviews");

    for (let i=0; i<ReviewsList.length; i++) {
        // Declaration to target tags with ID
        let innter_div_tag = document.createElement("div");
        let h2_tag_fullname = document.createElement("h2");
        let p_tag_review = document.createElement("p");

        console.log(ReviewsList[0]);
        let fullname = ReviewsList[i].fullname;
        let text = document.createTextNode(fullname);
        h2_tag_fullname.appendChild(text);
        innter_div_tag.appendChild(h2_tag_fullname);

        let review = ReviewsList[i].review;
        text = document.createTextNode("Review: " + review);
        p_tag_review.appendChild(text);
        innter_div_tag.appendChild(p_tag_review);

        div_tag.appendChild(innter_div_tag);
    }
}

function getReviews(){
    fetch (apiURL).then((response) => {
        return response.json();
    }).then(data => {
        // Pass the response to a processing function
        //console.log(data.Reviews);
        processToFrontEnd(data.Reviews);
    }).catch((error) => {
        console.log(error);
    })
}

getReviews();
