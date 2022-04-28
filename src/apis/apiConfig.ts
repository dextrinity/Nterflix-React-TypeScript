const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '580e60a52ac48c49cfd3ca83ce561599',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;