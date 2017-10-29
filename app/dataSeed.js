module.exports = (db) => {
  db.push('/app/title', 'Happy Helping');
  db.push('/app/stats/first', 20000);
  db.push('/app/stats/second', 2500);
  db.push('/app/stats/third', 6000);
  db.push('/app/users/company', {
    login: 'companyUser',
    password: 'companyPassword',
    location: '/company',
    description: 'Information about your company.'
  });
  db.push('/app/users/private', {
    login: 'privateUser',
    password: 'privatePassword',
    location: '/private',
    description: 'Information about you.'
  });
  db.push('/app/users/organization', {
    login: 'organizationUser',
    password: 'organizationPassword',
    location: '/organization',
    description: 'Information about your organization.'
  });
};