let quotes = [
    {   "quote":"“Read a thousand books, and your words will flow like a river.”",
        "author":"― Lisa See"
    },
    {   "quote":"“The first draft is just you telling yourself the story.”",
        "author":"― Terry Pratchett"
    },
    {   "quote":"“You can always edit a bad page. You can’t edit a blank page.”",
        "author":"― Jodi Picoult"
    },
    {   "quote":"“Start writing, no matter what. The water does not flow until the faucet is turned on.”",
        "author":"— Louis L’Amour"
    },
    {   "quote":"“Every secret of a writer’s soul, every experience of his life, every quality of his mind, is written large in his works.”",
        "author":"— Virginia Woolf"
    },
    {   "quote":"“Don’t tell me the moon is shining; show me the glint of light on broken glass.”",
        "author":"― Anton Chekhov"
    },
    {   "quote":"“There is no greater agony than bearing an untold story inside you.”",
        "author":"― Maya Angelou"
    },
    {   "quote":"“If the book is true, it will find an audience that is meant to read it.”",
        "author":"― Wally Lamb"
    },
    {   "quote":"“I can shake off everything as I write; my sorrows disappear, my courage is reborn.”",
        "author":"― Lisa See"
    },
    {   "quote":"“Read a thousand books, and your words will flow like a river.”",
        "author":"— Anne Franke"
    }
]


const $btn = $('#btn');

$btn.click(function(){
    let number = Math.floor(Math.random()*quotes.length);
    $('#quote').html(quotes[number].quote);
    $('#author').html(quotes[number].author);
});











