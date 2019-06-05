console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subTitle: 'App to make decisions',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        rebuildDOMAndRender();
    }
};

const removeAll = () => {
    app.options = []
    rebuildDOMAndRender();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [10, 20, 30];

const rebuildDOMAndRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subTitle && <p>{app.subTitle}</p>}
            {app.options && app.options.length > 0 ? <p>Hear are yor options</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((op, index) => <li key={index}>{op}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
               <input type="text" name="option" />
               <button>Add</button>
            </form>
        </div>
    );

    ReactDOM.render(
        template,
        appRoot
    );
}

// JSX - JavaScript XML
rebuildDOMAndRender();

const user = {
    name:'Pradeep Kumar',
    age:30,
    location: 'India'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const new_template = (
    <div>
        <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
