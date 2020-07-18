import types from './mutations-type';

const actions = {
    getUsers(context) {
        let url = `https://jsonplaceholder.typicode.com/users`;

        fetch(url)
            .then(r => r.json())
            .then(data => context.commit(types.setList, data));
    }
}

export default actions;