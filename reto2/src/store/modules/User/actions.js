import types from './mutations-type';

const actions = {
    getUsers(context) {
        let url = `https://jsonplaceholder.typicode.com/users`;

        fetch(url)
            .then(r => r.json())
            .then(data => context.commit(types.setList, data));
    },
    getUser(context, id) {
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetch(url)
            .then(r => r.json())
            .then(data => context.commit(types.setUser, data));
    }
}

export default actions;