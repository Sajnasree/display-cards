
import React , {useState , useEffect} from 'react';
import api from '../api/api';



export default  () => {
    const [results , setResults] = useState([]);
    const [errorMessage , setErrorMessage] = useState('');
    const getRepositories = async () => {
        try{
            console.log('get repositories called')
            const repositories = await api.get();
            console.log(repositories);
            setResults(repositories);
        }
        catch(err){
            setErrorMessage('Something went wrong');
        }
    }
    
    // useEffect(()=> {
    //     performSearch('pasta');
    // },[]);

    return [getRepositories , results , errorMessage];
}