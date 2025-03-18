import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.collection('_superusers').authWithPassword(
    'phatduong0812@gmail.com',
    'Phatdeptrai0812',
);

export default pb;
