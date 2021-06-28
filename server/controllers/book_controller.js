let books = [{
    id: 0,
    title: 'test',
    author: 'author 0'
}];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);
    }
}