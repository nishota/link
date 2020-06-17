import React from 'react';

export default (props) =>{
    const {links, name, discription} = props;
    console.log(links);
    const linksDom = links.map(x => <li key={x.name}><a href={x.link}>{x.name}</a></li>);
    return(
        <div>
            <h3>{name}</h3>
            <p>{discription}</p>
            <ul>{linksDom}</ul>
        </div>
    );
};