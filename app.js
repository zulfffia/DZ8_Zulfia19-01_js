document.querySelector("#generate").addEventListener("click", () =>{
     generate();
 });
document.querySelector("#back").addEventListener("click", () => {
    generate("back");
});
document.querySelector("#next").addEventListener("click", () => {
    generate("next");
});

generate = () => {
    var quotes ={
        "|society|":
        '"Люди – слишком сложные существа, чтобы понять их полностью"',
        "It's me)":
        '"Ненавижу советы – все, кроме своих"',
        "mood)":
        '"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."',
        "<persistence>":
        '"Начинать всегда стоит с того, что сеет сомнения."',
        "~life~":
        '"Ваше время ограничено, не тратьте его, живя чужой жизнью"',
        "reliance:)":
        '"В моем словаре нет слова «невозможно»"',
        "_luck_":
        '"Лучшая месть – огромный успех"',
        "*future*":
        '"Ты становишься тем, во что веришь"',
        "untitled...":
        '"Единственный способ сделать что-то очень хорошо – любить то, что ты делаешь"',
        "happy))":
        '"Счастье зависит только от ваших действий"',
        "i don't know._.":
        '"Научитесь говорить “Я не знаю”, и это уже будет прогресс"',
        "money$":
        '"Нельзя купить счастье за деньги, но можно арендовать"',
        "'belief'":
        '"Главное — то, во что ты веришь"',
    };
    var authors = Object.keys(quotes);
    var author = authors [Math.floor(Math.random()* authors.length)];
    var quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};
