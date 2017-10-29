module.exports = (db) => {
  db.push('/app/title', 'Happy Helping');
  db.push('/app/stats/first', 20000);
  db.push('/app/stats/second', 2500);
  db.push('/app/stats/third', 6000);
  db.push('/app/users', [
    {
      login: 'companyUser',
      password: 'companyPassword',
      location: '/company'
    },
    {
      login: 'privateUser',
      password: 'privatePassword',
      location: '/private'
    }, 
    {
      login: 'organizationUser',
      password: 'organizationPassword',
      location: '/organization'
    }
  ]);
};