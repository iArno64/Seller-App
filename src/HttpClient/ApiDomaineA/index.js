import ky from "ky";

const urlBase = "http://localhost:3004";

export default ky.create({ prefixUrl: urlBase });
