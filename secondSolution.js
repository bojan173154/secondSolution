let data;

const fetchData = async () => {
    try {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        data = await res.json();

        document.getElementById('main').innerHTML = data.setup;
    } catch(e) {
        console.error(e);
    }
};

fetchData();

const handleClick = () => {
    document.getElementById('main').innerHTML = data.punchline;
};