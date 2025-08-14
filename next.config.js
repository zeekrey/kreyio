module.exports = {
  async redirects() {
    return [
      {
        source: '/call',
        destination: 'https://cal.com/christiankrey',
        permanent: true,
      },
    ]
  },
}