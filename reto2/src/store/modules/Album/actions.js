import types from './mutations-type';

const actions = {
    getAlbums(context) {
        let url = `https://jsonplaceholder.typicode.com/albums`;

        fetch(url)
            .then(r => r.json())
            .then(data => context.commit(types.setList, data));
    }
}

export default actions;