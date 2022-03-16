import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://prod.v1.mydukan.org:8443/mydukanapi',
//     headers: {'x-api-key': 'eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTM2NTkwMzMsImV4cCI6MTU0NTE5NTAzMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IndlYiIsIlN1cm5hbWUiOiJXRUIiLCJFbWFpbCI6IndlYkBleGFtcGxlLmNvbSJ9'}
// });

const AuthInstance = axios.create({
    baseURL: 'http://localhost:3000/user',
});

export default AuthInstance;
