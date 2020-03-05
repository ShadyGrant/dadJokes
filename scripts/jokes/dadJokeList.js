import { dadJokesHtml } from"./dadJoke.js"
import { useDadJokes } from"./dadJokeDataProvider.js"

const contentTarget = document.querySelector(".dadJokesContainer")

export const dadJokesList =()=>{
const arrayOfDadJokesObjects=useDadJokes()

for (const dadJokesObject of arrayOfDadJokesObjects) {

    //make an html representation of a taco
    const htmlRepresentationOfdadJokes = dadJokesHtml(dadJokesObject)
    //put that html representation on the DOM
    contentTarget.innerHTML += htmlRepresentationOfdadJokes
    
}

}
