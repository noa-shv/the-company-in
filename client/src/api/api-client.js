import AxiosClient from '../config/axios';

export default {
    company: {
        find: async (domain) => {
            const {data} = await AxiosClient(`/companies/find?domain=${domain}`);
            return data;
        }
    },
}
