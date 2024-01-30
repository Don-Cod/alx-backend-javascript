/**
 * Contains Route handlers
 * @Author is Don-Cod<https://github.com/Don-Cod/alx-backend-javascript>
 */
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
