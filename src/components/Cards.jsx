import React, { useEffect, useState } from 'react';

const Cards = () => {
    // Estado para almacenar los datos de la API
    const [data, setData] = useState([]);

    // Función para hacer la solicitud a la API
    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const jsonData = await response.json();
            setData(jsonData); // Almacenar los datos en el estado
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1>Cards</h1>
            <div className="row">
                {data.map((item, index) => (
                    <div key={index} className="col-md-4">
                        {/* Renderizar los datos en tarjetas */}
                        <div className="card mb-3">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className='card-text'>$ {item.price}</p>
                                {/* Agrega más campos según la estructura de tus datos */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
