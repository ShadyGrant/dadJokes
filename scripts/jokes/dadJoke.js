export const dadJokesHtml=(dadJokesObject)=>{
    return `
    <section class="joke">
            <header class="joke__question">
                ${dadJokesObject.question}
            </header>
            <p class="joke__answer">
                ${dadJokesObject.answer}
            </p>
        </section>
    `
}