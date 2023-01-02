import { useState } from "react";

export async function get_data () {
    const [data, setData] = useState([])

    fetch('https://jeap.rio.rj.gov.br/dadosAbertosAPI/v2/transporte/veiculos/brt')
        .then( (response) => response.json() )
        .then( (data) => {
            console.log(data)
        });
    
    
};