let baseUrl = '';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://video-on-demand-service.herokuapp.com/api/v1';
} else {
  baseUrl = 'http://localhost:5000/api/v1';
}

export default baseUrl;
