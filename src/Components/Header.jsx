import React from 'react'
import Navbar from './Navbar';
function Header() {
    return (
    <div className="header">
        <Navbar />
        <div className="intro">
        <p>Looking for a Property !</p>
        <h1>
            <span>Buy </span>And <span>Sell </span> Property
        </h1>
        <p className="details">
            Maksud penggunaan Lorem Ipsum
            adalah karena ia kurang lebih memiliki penyebaran huruf yang
            normal, ketimbang menggunakan kalimat seperti "Bagian isi
            disini, Karenanya pencarian terhadap kalimat "Lorem Ipsum"
            akan berujung pada banyak situs web yang masih dalam tahap
            pengembangan. Berbagai versi juga telah berubah dari tahun ke
            tahun, kadang karena tidak sengaja, kadang karena disengaja
            (misalnya karena dimasukkan unsur humor atau semacamnya)
        </p>
        <a href="#" className="header-btn">
            details
        </a>
        </div>
    </div>
    );
}

export default Header;