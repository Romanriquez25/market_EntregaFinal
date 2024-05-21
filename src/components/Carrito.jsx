import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = () => {
    return (
        <div className="container">
            <h1>Carrito</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aquí irían las filas de los productos */}
                    <tr>
                        <td>Producto 1</td>
                        <td>$10.00</td>
                        <td>2</td>
                        <td>$20.00</td>
                    </tr>
                    <tr>
                        <td>Producto 2</td>
                        <td>$15.00</td>
                        <td>1</td>
                        <td>$15.00</td>
                    </tr>
                    {/* Aquí terminan las filas de los productos */}
                    <tr>
                        <td colSpan="3" className="text-end">Total</td>
                        <td>$35.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Carrito;