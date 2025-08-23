const div = React.createElement("div",{id:"root"},
    React.createElement("div",{id:"child"},
        React.createElement("p",{id:"para1"},"This is first paragraph tag"),
        React.createElement("p",{id:"para2"},"This is second paragraph")));

        //or we can just create a array of the ajucent elements .

const div2 = React.createElement("div2",{id:"root"},
    React.createElement("div",{id:"child2"},
        [React.createElement("p",{id:"para1"},"This is first paragraph tag"),
        React.createElement("p",{id:"para2"},"This is second paragraph")]));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
    