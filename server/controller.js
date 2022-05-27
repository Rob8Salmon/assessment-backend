module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

module.exports = {
    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense!", "Believe it can be done!", "Success is a journey not a destination!"]

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    }
}