import React from "react";

import { Container, Selector, Cleaner} from './styles'

function Filter() {

    const langs = [
        {name: 'JavaScript', count: 5, color:' #f1c40f'},
        {name: 'HTML', count: 6, color:' #f37272'},
        {name: 'PHP', count: 1, color:' #7f8c8d'},
        {name: 'NodeJS', count: 5, color:'#2ecc71'},    
        {name: 'React', count: 5, color:' #3498db'},
    ];  

    const selectors = langs.map(({name,count, color})=> (
        <Selector key={name.toLowerCase()}
        color={color}
        >
            <span>{name}</span>
            <span>{count}</span>
        </Selector>
    ));

    return(
    <Container>
    {selectors}
    <Cleaner>
        Limparr
    </Cleaner>
    </Container>
    
    )   
  
}
export default Filter;