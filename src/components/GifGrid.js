import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifGridItem
                            key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
export default GifGrid;
