import types from './mutations-type';

const actions = {
    getPosts(context) {
        let url = `https://jsonplaceholder.typicode.com/posts`;

        fetch(url)
            .then(r => r.json())
            .then(data => context.commit(types.setList, data));
    },
    getPost(context, id) {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url)
            .then(r => r.json())
            .then(data => context.commit(types.setPost, data));
    }
}

export default actions;