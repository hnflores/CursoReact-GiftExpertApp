import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {
    //const categories = ['DC', 'Marvel'];
    const [categories, setcategories] = useState([]);
    // const handleAdd = () => {
    //     //setcategories([...categories,'Holaaaaaaa']);
    //     setcategories(cats => [...cats, 'Marvel 2']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategory={setcategories} />
            <ol>
                {categories.map((category, i) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))}
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
