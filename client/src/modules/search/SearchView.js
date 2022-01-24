import { useState } from 'react';
import SearchBar from './SearchBar';
import api from '../../api';

function SearchView() {
    const [domain, setDomain] = useState('');
    const [companies, setCompanies] = useState('');

    const getCompanies = async () => {
        const data = await api.company.find(domain);
        setCompanies(data);
    }
    return (
        <SearchBar domain={domain} setDomain={setDomain} getCompanies={getCompanies}/>
    );
}

export default SearchView;
