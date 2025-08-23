import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Categorie from '../Categorie/Categorie';

export default function Categories() {
    function getCategories() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories/');
    }
    let { data, isLoading } = useQuery('getCategories', getCategories)
    // const [brands, setBrands] = useState([]);
    // const [loading, setLoading] = useState(true);

    // async function getBrands() {
    //   let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/`);
    //   setBrands(data.data); 
    //   setLoading(false);
    // }

    // useEffect(() => {
    //   getBrands();
    // }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="container my-5">
            <div className="row">
                {data?.data.data.map((categorie) => {
                    return <Categorie categorie={categorie} key={categorie._id} />
                })}
            </div>
        </div>
    );
  }
